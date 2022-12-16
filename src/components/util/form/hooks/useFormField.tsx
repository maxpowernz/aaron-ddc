import { IFieldProps, useFormFieldGroup } from './useFormFieldGroup';

export function useFormField({ name, component, ...props }: IFieldProps) {
  const fields = [{ name, component }];

  return useFormFieldGroup({ name, fields, ...props });
}
