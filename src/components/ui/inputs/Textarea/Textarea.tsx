import React from 'react';
import classnames from 'classnames';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { StyledInputBaseRoot } from '@/src/components/ui/inputs/StyledInputBaseRoot/StyledInputBaseRoot';
import { InputProps } from '../input-types';

export type TextareaProps = {
  error?: boolean;
} & TextareaAutosizeProps &
  InputProps;

export const Textarea = React.forwardRef(function CustomInput(
  { className, error, disabled, label, size = 4, ...props }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const width = `w-${size}`;

  const baseStyle = classnames(`${width}`, {
    'Mui-disabled': disabled,
    'Mui-error': error,
  });

  return (
    <StyledInputBaseRoot className={baseStyle}>
      <TextareaAutosize
        minRows={2}
        aria-invalid={Boolean(error)}
        aria-label={props['aria-label'] ?? label ?? props.name}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    </StyledInputBaseRoot>
  );
});
export default Textarea;
