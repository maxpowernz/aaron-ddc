import React from 'react';
import classnames from 'classnames';
import Select from 'react-select';

import { CustomDropdownProps } from '@/components/ui/atoms/input-types';
import { OptionProps as OptionDataProps } from '@/components/ui/atoms';
import Caret from '@/assets/icons/18x18/caret.svg';

export function isOptionType(data: OptionDataProps | unknown): data is OptionDataProps {
  return (data as OptionDataProps).value !== undefined;
}

export function isPlaceholder(data: OptionDataProps | unknown): boolean {
  return isOptionType(data) && data.value === '';
}

export const Dropdown = React.forwardRef(function CustomInput(
  { className, error, disabled, label, size = 4, ...props }: CustomDropdownProps,
  ref: React.ForwardedRef<never>
) {
  const PLACEHOLDER = 'text-placeholder opacity-50';

  return (
    <Select
      unstyled
      className={`w-grid-${size}`}
      classNames={{
        container: () => classnames({ '!cursor-not-allowed': disabled }),
        control: ({ isFocused, isDisabled, menuIsOpen }) =>
          classnames(`flex text-base border rounded bg-gray-5 hover:bg-gray-10 p-3`, {
            'bg-white hover:bg-white': isDisabled || menuIsOpen,
            'border-1 border-gray-10 !cursor-not-allowed': isDisabled,
            'border-b-0 rounded-b-none': menuIsOpen,
            'border-1 border-fmg-green': isFocused && !isDisabled && !error,
            'border-transparent': !isDisabled && !error && !menuIsOpen && !isFocused,
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
          classnames('border rounded-b border-1 border-t-0 border-fmg-green mt-[-1px]', {
            'border-error': error,
          }),
        singleValue: ({ data }) => classnames({ [PLACEHOLDER]: isPlaceholder(data) }),
        placeholder: () => classnames(PLACEHOLDER),
        noOptionsMessage: () => 'p-3',
      }}
      components={{
        DropdownIndicator: ({ isFocused, isDisabled }) => (
          <Caret
            className={classnames({ 'opacity-50': !isDisabled && !error && !isFocused, 'fill-gray-20': isDisabled, 'fill-error': error })}
          />
        ),
      }}
      {...props}
      ref={ref}
      isDisabled={disabled}
      aria-disabled={disabled}
      aria-invalid={Boolean(error)}
      aria-label={label}
    />
  );
});

export default Dropdown;
