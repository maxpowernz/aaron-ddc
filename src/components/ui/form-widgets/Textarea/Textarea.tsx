import React from 'react';

import { FieldProps, useFormField } from '@/src/components/util/form';
import TextareaInput from '@/src/components/ui/inputs/Textarea/Textarea';

export type TextareaProps = Omit<FieldProps, 'component'> & {
  minRows?: number;
  maxRows?: number;
};

export function Textarea(props: TextareaProps): JSX.Element {
  const { render } = useFormField({ ...props, component: TextareaInput });
  return render();
}
