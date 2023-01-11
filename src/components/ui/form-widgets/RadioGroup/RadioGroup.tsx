import React from 'react';

import { useModelContext } from '@/src/context/ModelContext';
import { FieldProps, useFormField, useSaveField, useScope } from '@/src/components/util/form';
import RadioGroupInput from '@/src/components/ui/inputs/RadioGroup/RadioGroup';

export type RadioGroupProps = Omit<FieldProps, 'component'> & {
  cols?: number;
};

export function RadioGroup({ scope = {}, ...props }: RadioGroupProps): JSX.Element {
  const { table } = useModelContext();
  const saveField = useSaveField();

  const onChange = (e: Event) =>
    saveField({
      name: props.name,
      value: (e.target as HTMLInputElement)?.value,
    });

  const otherProps = (table && { onChange }) ?? {};

  const { render } = useFormField({
    ...props,
    component: RadioGroupInput,
    ...otherProps,
  });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
