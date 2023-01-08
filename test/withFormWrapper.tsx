import { ReactElement } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-unresolved
import { DefaultValues } from 'react-hook-form/dist/types/form';

export function withFormWrapper<T extends FieldValues>(props: { defaultValues: DefaultValues<T> }) {
  return function CreatedWrapper({ children }: { children: ReactElement }) {
    const formMethods = useForm<T>({ defaultValues: props.defaultValues });
    return <FormProvider {...formMethods}>{children}</FormProvider>;
  };
}
