import React from 'react';

import { IFieldProps, useField } from '@/src/components/context/form/Field';
import TextareaInput from '@/src/components/ui/inputs/Textarea/Textarea';

export interface ITextareaProps extends Omit<IFieldProps, 'component'> {
  minRows?: number;
  maxRows?: number;
}

export function Textarea(props: ITextareaProps): JSX.Element {
  const { render } = useField({ ...props, component: TextareaInput });
  return render();
}
