import React from 'react';

import { FieldProps, useFormField, useSaveField, useScope } from '@/src/components/util/form';
import RadioGroupInput from '@/src/components/ui/inputs/RadioGroup/RadioGroup';

export type RadioGroupProps = Omit<FieldProps, 'component'> & {
  cols?: number;
};

export function RadioGroup({ scope = {}, ...props }: RadioGroupProps): JSX.Element {
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
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
