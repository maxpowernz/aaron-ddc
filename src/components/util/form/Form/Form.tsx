import React, { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModelConext } from '@/src/context/ModelContext';
import { useLoadTable } from '@/src/components/util/form/hooks/useLoadTable';
import { FormProps } from '@/src/components/util/form/form-types';

export function Form({ model: inModel, uid, onSubmit, children, mode = 'onBlur' }: FormProps) {
  const { current: model } = useRef(inModel);
  const { current: table } = useRef(model.table);
  const { current: schema } = useRef(model.schema);

  const form = useForm({ resolver: zodResolver(schema), mode });

  const { result, isLoaded } = useLoadTable({ form, model, uid });

  if (table && !isLoaded) return null;

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
