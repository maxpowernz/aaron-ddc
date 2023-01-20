import { Props } from 'react-select';

export type InputProps = {
  'aria-label'?: string | undefined;
  className?: string;
  defaultValue?: string | number | string[];
  disabled?: boolean;
  error?: string | boolean;
  id?: string | undefined;
  label?: string;
  name: string;
  options?: OptionProps[];
  pattern?: string;
  placeholder?: string;
  size?: number;
  value?: string | number | string[];
};

export type OptionProps = {
  id?: string;
  label: string;
  name?: string;
  value?: string | number | string[];
};

export type CustomDropdownProps = Omit<Props, 'size' | 'onChange' | 'options'> & InputProps;
