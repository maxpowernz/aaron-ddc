import React from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { IInputProps } from '../input-types';

export type TextareaProps = {
  error?: boolean;
} & TextareaAutosizeProps &
  IInputProps;

export const Textarea = React.forwardRef(function CustomInput(
  { className, error, label, size = 4, ...props }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const width = `w-${size}`;
  return (
    <TextareaAutosize
      minRows={2}
      aria-label={label ?? props.name}
      className={`text-base bg-base-1 hover:bg-base-2 rounded outline active:outline-1 focus:outline-1 p-3 ${
        error ? 'outline-1 outline-error' : 'outline-0 outline-fmg-green'
      } ${width} ${className}`}
      ref={ref}
      {...props}
    />
  );
});
export default Textarea;
