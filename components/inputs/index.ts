export enum Sizes {
  w1 = 80,
  w2 = 96,
  wfull = 'full',
}

export interface IInputProps {
  label?: string;
  pattern?: string;
  size?: Sizes;
  options?: IOptionProps[];
}

export interface IOptionProps {
  value: string;
  name?: string;
  label: string;
  id: string;
}
