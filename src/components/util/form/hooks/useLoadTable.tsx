import { useLiveQuery } from 'dexie-react-hooks';
import { ILoadTableProps, ILoadTableReturnProps } from '../form-types';
import { ZodInvalidTypeIssue } from 'zod/lib/ZodError';

export function useLoadTable<T>({ form, uid, model }: ILoadTableProps): ILoadTableReturnProps<T> {
  return (
    useLiveQuery(async () => {
      const count = await model.table?.count();
      const result = await model.table?.get(uid);

      if (count) {
        Object.entries<object>(result).forEach(([key, val]) => {
          const safeParse = () => {
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
