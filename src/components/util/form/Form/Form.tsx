import React, { FormEventHandler } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IndexableType } from 'dexie';

import { IModel } from '@/src/model/model-type';
import { ModelConext } from '@/src/model/ModelContext';
import { useLoadTable } from '@/src/components/util/form/hooks/useLoadTable';

export type FormType = {
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  model: IModel;
  uid: IndexableType;
  onSubmit: (value?: any) => void | FormEventHandler;
  children?: React.ReactElement | React.ReactElement[];
};

export function Form({ model, uid, onSubmit, children, mode = 'onBlur' }: FormType) {
  const form = useForm({ resolver: zodResolver(model.schema), mode });

  const { result, isLoaded } = useLoadTable({ form, model, uid });

  if (model.table && !isLoaded) return null;

  return (
    <FormProvider {...form}>
      <ModelConext.Provider value={{ ...model, uid, defaultValues: result }}>
        <form className="form-container" onSubmit={form.handleSubmit(onSubmit)}>
          {children}
        </form>
      </ModelConext.Provider>
    </FormProvider>
  );
}
