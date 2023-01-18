import React from 'react';
import classnames from 'classnames';
import Select, { Props } from 'react-select';

import { InputProps, OptionProps as OptionDataProps } from '@/components/ui/inputs';

export type CustomSelectProps = Omit<Props, 'size'> & InputProps;

const PLACEHOLDER = 'text-placeholder opacity-50';

export function isOptionType(data: OptionDataProps | unknown): data is OptionDataProps {
  return (data as OptionDataProps).value !== undefined;
}

export function isPlaceholder(data: OptionDataProps | unknown): boolean {
  return isOptionType(data) && data.value === '';
}

export const Dropdown = React.forwardRef(function CustomInput(
  { className, error, disabled, label, options, placeholder = 'Select', size = 4, ...props }: CustomSelectProps,
  ref: React.ForwardedRef<never>
) {
  const defaultOption = { value: '', label: placeholder };
  const allOptions = [defaultOption, options].flat();

  return (
    <Select
      unstyled
      className={`w-grid-${size}`}
      classNames={{
        container: () => classnames({ '!cursor-not-allowed': disabled }),
        control: ({ isFocused, isDisabled, menuIsOpen }) =>
          classnames(`flex text-base border rounded bg-gray-5 hover:bg-gray-10 p-3`, {
            'bg-transparent hover:bg-transparent': isDisabled || menuIsOpen,
            'border-1 border-gray-10 !cursor-not-allowed': isDisabled,
            'border-b-0 rounded-b-none': menuIsOpen,
            'border-1 border-fmg-green': isFocused && !isDisabled && !error,
            'border-1 border-error': error,
            className,
          }),
        option: ({ isDisabled, isSelected, isFocused, data }) =>
          classnames('flex place-content-center h-12 p-3', {
            'bg-gray-5': isFocused && !isSelected,
            'bg-gray-10': isSelected,
            'active:bg-gray-10': !isDisabled,
            [PLACEHOLDER]: isPlaceholder(data),
          }),
        menu: () =>
          classnames('border rounded-b border-1 border-t-0 border-fmg-green', {
            'border-error': error,
          }),
        singleValue: ({ data }) => classnames({ [PLACEHOLDER]: isPlaceholder(data) }),
        placeholder: () => classnames(PLACEHOLDER),
      }}
      {...props}
      ref={ref}
      isDisabled={disabled}
      aria-disabled={disabled}
      aria-invalid={Boolean(error)}
      aria-label={label}
      options={allOptions}
      placeholder={placeholder}
    />
  );
});

export default Dropdown;
