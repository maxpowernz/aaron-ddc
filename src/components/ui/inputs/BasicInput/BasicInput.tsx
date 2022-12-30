import React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';

import InvalidIcon from '@/src/assets/icons/18x18/invalid.svg';
import { StyledInputBaseRoot } from '@/src/components/ui/inputs/StyledInputBaseRoot/StyledInputBaseRoot';
import { InputProps } from '../input-types';

export type BasicInputProps = InputUnstyledProps & InputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { className, error, disabled, label, pattern, size = 4, ...props }: BasicInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;

  return (
    <InputUnstyled
      slotProps={{
        input: {
          'aria-label': props['aria-label'] ?? label ?? props.name,
          pattern,
        },
      }}
      slots={{ root: StyledInputBaseRoot }}
      {...props}
      ref={ref}
      error={Boolean(error)}
      disabled={disabled}
      className={width}
      // TODO: fill color not working
      endAdornment={error ? <InvalidIcon className="self-center fill-error mx-[-1.75em]" /> : null}
    />
  );
});

export default BasicInput;
