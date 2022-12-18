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
  id: string;
}
