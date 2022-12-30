import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModelConext } from '@/src/model/ModelContext';
import { useLoadTable } from '@/src/components/util/form/hooks/useLoadTable';
import { FormProps } from '@/src/components/util/form/form-types';

export function Form({ model, uid, onSubmit, children, mode = 'onBlur' }: FormProps) {
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
