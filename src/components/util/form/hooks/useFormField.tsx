import { FieldProps } from '../form-types';
import { useFormFieldGroup } from './useFormFieldGroup';

export function useFormField<T>({ name, component, ...props }: FieldProps & T) {
  const fields = [{ name, component }];

  return useFormFieldGroup({ name, fields, ...props });
}
