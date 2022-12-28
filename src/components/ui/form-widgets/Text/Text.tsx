import React from 'react';

import { IFieldProps, useFormField, useScope } from '@/src/components/util/form';
import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';

export interface ITextProps extends Omit<IFieldProps, 'component'> {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
}

export function Text({ scope = {}, ...props }: ITextProps): JSX.Element {
  const { render } = useFormField({ ...props, component: BasicInput });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
