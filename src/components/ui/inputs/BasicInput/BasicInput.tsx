import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';

import InvalidIcon from '@/src/assets/icons/18x18/invalid.svg';
import { StyledInputBaseRoot } from '@/src/components/ui/inputs/StyledInputBaseRoot/StyledInputBaseRoot';
import { InputProps } from '../input-types';

export type BasicInputProps = Omit<InputBaseProps, 'size'> & InputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { error, disabled, label, endAdornment, size = 4, ...props }: BasicInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;

  return (
    <InputBase
      slots={{ root: StyledInputBaseRoot }}
      className={width}
      // TODO: fill color not working
      endAdornment={
        error ? (
          <InputAdornment position="start" className="self-center">
            <InvalidIcon className="fill-error" />
          </InputAdornment>
        ) : (
          <>{endAdornment}</>
        )
      }
      {...props}
      ref={ref}
      error={Boolean(error)}
      disabled={disabled}
      inputProps={{
        ...props.inputProps,
        'aria-label': props['aria-label'] ?? label ?? props.name,
      }}
    />
  );
});

export default BasicInput;
