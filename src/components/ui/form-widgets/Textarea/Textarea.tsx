import React from 'react';

import { IFieldProps, useFormField } from '@/src/components/util/form';
import TextareaInput from '@/src/components/ui/inputs/Textarea/Textarea';

export interface ITextareaProps extends Omit<IFieldProps, 'component'> {
  minRows?: number;
  maxRows?: number;
}

export function Textarea(props: ITextareaProps): JSX.Element {
  const { render } = useFormField({ ...props, component: TextareaInput });
  return render();
}
