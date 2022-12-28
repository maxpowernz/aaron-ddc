import React from 'react';

import { IFieldProps, useFormField, useSaveField } from '@/src/components/util/form';
import RadioGroupInput from '@/src/components/ui/inputs/RadioGroup/RadioGroup';

export interface IRadioGroupProps extends Omit<IFieldProps, 'component'> {
  cols?: number;
}

export function RadioGroup(props: IRadioGroupProps): JSX.Element {
  const saveField = useSaveField();
  const { render } = useFormField({
    ...props,
    component: RadioGroupInput,
    onChange: (e: Event) =>
      saveField({
        name: props.name,
        value: (e.target as HTMLInputElement)?.value,
      }),
  });
  return render();
}
