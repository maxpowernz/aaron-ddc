import React, { FormEventHandler } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IndexableType } from 'dexie';

import { IModel } from '@/src/model/model-type';
import { ModelConext } from '@/src/model/ModelContext';
import { useLiveQuery } from 'dexie-react-hooks';

type FormType = {
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  model: IModel;
  uid: IndexableType;
  onSubmit: (value?: any) => void | FormEventHandler;
  children: React.ReactElement | React.ReactElement[];
};

export function Form({ model, uid, onSubmit, children, mode = 'onBlur' }: FormType) {
  const { defaultValues, count } =
    useLiveQuery(async () => {
      const count = await model.table?.count();
      return { defaultValues: await model.table?.get(uid), count };
    }) ?? {};

  const form = useForm({ resolver: zodResolver(model.schema), mode });

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
