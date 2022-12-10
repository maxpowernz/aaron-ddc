import React from 'react';

import BasicInput from 'components/inputs/BasicInput';
import { IFieldProps, useField } from '@/components/form-widgets/Field';

export interface ITextProps extends Omit<IFieldProps, 'component'> {}

export function Text(props: ITextProps): JSX.Element {
  const { render } = useField({ ...props, component: BasicInput });
  return render();
}
