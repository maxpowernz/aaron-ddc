import React from 'react';
import classnames from 'classnames';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { StyledInputBaseRoot } from '@/src/components/ui/inputs/StyledInputRoot/StyledInputRoot';
import { IInputProps } from '../input-types';

export type TextareaProps = {
  error?: boolean;
} & TextareaAutosizeProps &
  IInputProps;

export const Textarea = React.forwardRef(function CustomInput(
  { className, error, disabled, label, size = 4, ...props }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const width = `w-${size}`;

  // TODO: can't theme with mui
  /*  const baseStyle = classnames(`${width} flex text-base rounded outline p-3`, {
    'outline-1 outline-base-2': disabled,
    'bg-base-1 hover:bg-base-2 outline-0 outline-fmg-green active:outline-1 focus-within:outline-1': !disabled && !error,
    'outline-1 outline-error': error,
    className,
  });*/

  const baseStyle = classnames(`${width}`, {
    'Mui-disabled': disabled,
    'Mui-error': error,
  });

  return (
    <StyledInputBaseRoot className={baseStyle}>
      <TextareaAutosize minRows={2} aria-label={props['aria-label'] ?? label ?? props.name} ref={ref} disabled={disabled} {...props} />
    </StyledInputBaseRoot>
  );
});
export default Textarea;
