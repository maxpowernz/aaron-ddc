import React from 'react';

import { FieldProps, useFormField, useScope } from '@/src/components/util/form';
import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';

export type TextProps = Omit<FieldProps, 'component'> & {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
};

export function Text({ scope = {}, ...props }: TextProps): JSX.Element {
  const { render } = useFormField({ ...props, component: BasicInput });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
