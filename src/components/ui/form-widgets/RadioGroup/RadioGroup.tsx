import React from 'react';

import { IFieldProps, useFormField } from '@/src/components/util/form';
import RadioGroupInput from '@/src/components/ui/inputs/RadioGroup/RadioGroup';

export interface IRadioGroupProps extends Omit<IFieldProps, 'component'> {
  cols?: number;
}

export function RadioGroup(props: IRadioGroupProps): JSX.Element {
  const { render } = useFormField({ ...props, component: RadioGroupInput });
  return render();
}
