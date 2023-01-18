import React from 'react';

import { FieldProps, useFormField, useScope } from '@/components/util/form';
import { TextInput } from '@/components/ui/inputs';

export type TextProps = Omit<FieldProps, 'component'> & {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
};

export function TextInputWidget({ scope = {}, ...props }: TextProps): JSX.Element {
  const { render } = useFormField({ ...props, component: TextInput });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
