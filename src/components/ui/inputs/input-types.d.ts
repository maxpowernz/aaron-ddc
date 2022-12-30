import { RadioGroupProps } from '@mui/material/RadioGroup';

export type InputProps = {
  label?: string;
  name: string;
  pattern?: string;
  size?: number;
  options?: OptionProps[];
  placeholder?: string;
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
} & InputProps &
  RadioGroupProps;
