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
};

export type OptionProps = {
  id?: string;
  label: string;
  name?: string;
  value: string | boolean;
};

export type CustomRadioGroupProps = {
  cols?: number;
  error?: string | boolean | object;
} & InputProps;

export type CustomDropdownProps = Omit<Props, 'size' | 'onChange' | 'options'> & InputProps;
