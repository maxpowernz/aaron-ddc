export type InputProps = {
  label?: string;
  name: string;
  pattern?: string;
  size?: number;
  options?: OptionProps[];
  placeholder?: string;
  error?: string | boolean;
  disabled?: boolean;
  EndAdornment?: any;
  'aria-label'?: string;
  className?: string;
};

export type OptionProps = {
  value: string | boolean;
  name?: string;
  label: string;
  id?: string;
};

export type CustomRadioGroupProps = {
  cols?: number;
  error?: string | boolean | object;
} & InputProps;
