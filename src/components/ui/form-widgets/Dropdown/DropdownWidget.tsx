import React from 'react';

import { CustomDropdownProps, OptionProps } from '@/components/ui/atoms/input-types';
import { FieldProps, useFormField, useScope } from '@/components/util/form';
import Dropdown from '@/components/ui/atoms/Dropdown/Dropdown';

export type DropdownProps = Omit<FieldProps, 'component'> & CustomDropdownProps;

export function DropdownWidget({ options, placeholder, scope = {}, ...props }: DropdownProps): JSX.Element {
  const defaultOption = { value: '', label: placeholder };
  const allOptions = [defaultOption, options].filter(Boolean).flat() as OptionProps[];

  const { render } = useFormField({ ...props, options: allOptions, placeholder, component: Dropdown });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
