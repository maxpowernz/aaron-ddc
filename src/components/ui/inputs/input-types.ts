export const BASE_SIZE = '48px';

export interface IInputProps {
  label?: string;
  pattern?: string;
  size?: number;
  options?: IOptionProps[];
}

export interface IOptionProps {
  value: string;
  name?: string;
  label: string;
  id: string;
}
