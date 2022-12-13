import { FormEventHandler } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

type FormType<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (value?: any) => void | FormEventHandler;
  children: React.ReactElement | React.ReactElement[];
};

export function Form<T extends FieldValues>({ form, onSubmit, children }: FormType<T>) {
  return (
    <FormProvider {...form}>
      <form className="form-container" onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
