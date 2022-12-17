import React, { FormEventHandler } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

// TODO: hacky... write test and move location
function determineArrayType(val: Exclude<object, string | boolean | number>) {
  if (['object'].includes(typeof val)) {
    const keys = Object.keys(val);
    return Boolean(keys.join('').match(/^01*2*3*\d/));
  }
  return false;
}

export function Form({ model, uid, onSubmit, children, mode = 'onBlur' }: FormType) {
  const form = useForm({ resolver: zodResolver(model.schema), mode });

  const { defaultValues, count } =
    useLiveQuery(async () => {
      const count = await model.table?.count();
      const defaultValues = await model.table?.get(uid);

      if (count) {
        Object.keys(defaultValues).forEach((key) => {
          const resolvedValue = determineArrayType(defaultValues[key]) ? Object.values(defaultValues[key]) : defaultValues[key];
          form.setValue(key, resolvedValue);
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
