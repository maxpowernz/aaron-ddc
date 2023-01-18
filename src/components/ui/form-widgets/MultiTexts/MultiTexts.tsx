import React from 'react';

import { TextInput } from '@/components/ui/atoms';
import { FieldGroupProps, TargetFieldProps, useFormFieldGroup, useScope } from '@/components/util/form';

export type MultiTextsProps = Omit<FieldGroupProps, 'fields'> & {
  fields: Omit<TargetFieldProps, 'component'>[];
};

export function MultiTexts({ scope = {}, ...props }: MultiTextsProps): JSX.Element {
  const { fields: origFields } = props;
  const fields = origFields.map((field) => ({ ...field, component: TextInput }));
  const { render } = useFormFieldGroup({ ...props, fields });

  const { isVisible } = useScope(scope);
  return isVisible ? render() : <></>;
}
