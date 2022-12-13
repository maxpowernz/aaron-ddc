export const BASE_SIZE = '48px';

export interface IInputProps {
  label?: string;
  name: string;
  pattern?: string;
  size?: number;
  options?: IOptionProps[];
  placeholder?: string;
}

export interface IOptionProps {
  value: any;
  name?: string;
  label: string;
  id: string;
}
