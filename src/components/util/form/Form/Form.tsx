import React, { FormEventHandler } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodInvalidTypeIssue } from 'zod/lib/ZodError';
import { IndexableType } from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

import { IModel } from '@/src/model/model-type';
import { ModelConext } from '@/src/model/ModelContext';

type FormType = {
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  model: IModel;
  uid: IndexableType;
  onSubmit: (value?: any) => void | FormEventHandler;
  children: React.ReactElement | React.ReactElement[];
};

export function Form({ model, uid, onSubmit, children, mode = 'onBlur' }: FormType) {
  const form = useForm({ resolver: zodResolver(model.schema), mode });

  const { defaultValues, count } =
    useLiveQuery(async () => {
      const count = await model.table?.count();
      const defaultValues = await model.table?.get(uid);

      if (count) {
        Object.entries<object>(defaultValues).forEach(([key, val]) => {
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
      return { defaultValues, count };
    }) ?? {};

  if (model.table && count == null) return null;

  return (
    <FormProvider {...form}>
      <ModelConext.Provider value={{ ...model, uid, defaultValues }}>
        <form className="form-container" onSubmit={form.handleSubmit(onSubmit)}>
          {children}
        </form>
      </ModelConext.Provider>
    </FormProvider>
  );
}
