import React from 'react';

import RadioGroupInput from '@/src/components/ui/inputs/RadioGroup/RadioGroup';
import { IFieldProps, useField } from '../Field/Field';

export interface IRadioGroupProps extends Omit<IFieldProps, 'component'> {
  cols?: number;
}

export function RadioGroup({ label, required, options, ...props }: IRadioGroupProps): JSX.Element {
  const { render } = useField({ label, required, options, ...props, component: RadioGroupInput });
  return render();
}
