import React from 'react';

import { IFieldProps, useField } from '@/src/components/context/form/Field';
import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';

export interface ITextProps extends Omit<IFieldProps, 'component'> {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
}

export function Text(props: ITextProps): JSX.Element {
  const { render } = useField({ ...props, component: BasicInput });
  return render();
}
