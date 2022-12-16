import React from 'react';

import { IFieldProps, useFormField } from '@/src/components/util/form';
import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';

export interface ITextProps extends Omit<IFieldProps, 'component'> {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
}

export function Text(props: ITextProps): JSX.Element {
  const { render } = useFormField({ ...props, component: BasicInput });
  return render();
}
