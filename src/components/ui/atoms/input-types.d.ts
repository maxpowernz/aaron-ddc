import { Props } from 'react-select';

export type InputProps = {
  'aria-label'?: string | undefined;
  className?: string;
  defaultValue?: string | undefined;
  disabled?: boolean;
  error?: string | boolean;
  id?: string | undefined;
  label?: string;
  name: string;
  options?: OptionProps[];
  pattern?: string;
  placeholder?: string;
  size?: number;
  value?: string;
};

export type OptionProps = {
  id?: string;
  label: string;
  name?: string;
  value: string;
};

export type CustomRadioGroupProps = {
  cols?: number;
  error?: string | boolean | object;
} & InputProps;

export type CheckboxProps = {
  cols?: number;
  checked?: boolean;
  defaultChecked?: boolean;
} & Omit<InputProps, 'placeholder'>;

export type CustomDropdownProps = Omit<Props, 'size' | 'onChange' | 'options'> & InputProps;
