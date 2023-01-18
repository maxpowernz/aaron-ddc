import React from 'react';

import { FieldProps, useFormField, useScope } from '@/components/util/form';
import TextareaInput from '@/components/ui/atoms/Textarea/Textarea';

export type TextareaProps = Omit<FieldProps, 'component'> & {
  minRows?: number;
  maxRows?: number;
};

export function Textarea({ scope = {}, ...props }: TextareaProps): JSX.Element {
  const { render } = useFormField({ ...props, component: TextareaInput });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
