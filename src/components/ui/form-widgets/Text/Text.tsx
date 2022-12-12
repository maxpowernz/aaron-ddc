import React from 'react';

import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';
import { IFieldProps, useField } from '@/src/components/ui/form-widgets/Field/Field';

export interface ITextProps extends Omit<IFieldProps, 'component'> {}

export function Text(props: ITextProps): JSX.Element {
  const { render } = useField({ ...props, component: BasicInput });
  return render();
}
