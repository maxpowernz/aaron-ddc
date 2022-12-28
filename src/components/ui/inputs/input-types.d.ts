import { RadioGroupProps } from '@mui/material/RadioGroup';

export interface IInputProps {
  label?: string;
  name: string;
  pattern?: string;
  size?: number;
  options?: IOptionProps[];
  placeholder?: string;
}

export interface IOptionProps {
  value: string | boolean;
  name?: string;
  label: string;
  id?: string;
}

export interface ICustomRadioGroupProps extends IInputProps, RadioGroupProps {
  cols?: number;
  error?: string | boolean | object;
}
