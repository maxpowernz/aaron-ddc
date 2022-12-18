import { IndexableType } from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import { ZodInvalidTypeIssue } from 'zod/lib/ZodError';
import { UseFormReturn } from 'react-hook-form/dist/types';

import { IModel } from '@/src/model/model-type';

type LoadTableProps = {
  form: UseFormReturn;
  uid: IndexableType;
  model: IModel;
};

type LoadTableReturnProps<T> = {
  result?: T;
  count?: number;
  isLoaded?: boolean;
};

export function useLoadTable<T>({ form, uid, model }: LoadTableProps): LoadTableReturnProps<T> {
  return (
    useLiveQuery(async () => {
      const count = await model.table?.count();
      const result = await model.table?.get(uid);

      if (count) {
        Object.entries<object>(result).forEach(([key, val]) => {
          const safeParse = (): object => {
            const { success, error: { issues = [] } = {} } = model.schema.shape[key].safeParse(val);
            // TODO: confirm it only throws ZodInvalidTypeIssue
            const hasArrayParseError = issues.find((issue: ZodInvalidTypeIssue) => issue.expected === 'array');
            if (!success && hasArrayParseError) {
              return Object.values(val);
            }
            return val;
          };

          form.setValue(key, safeParse(), { shouldDirty: true, shouldValidate: true, shouldTouch: true });
        });
      }
      return { result, count, isLoaded: count != null };
    }) ?? {}
  );
}
