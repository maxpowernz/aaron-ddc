import React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import InvalidIcon from '@/src/assets/icons/18x18/invalid.svg';
import { IInputProps } from '../input-types';

export type BasicInputProps = InputUnstyledProps & IInputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { className, error, label, pattern, size = 4, ...props }: BasicInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;
  return (
    <InputUnstyled
      slotProps={{
        input: {
          'aria-label': props['aria-label'] ?? label ?? props.name,
          pattern,
          className: `bg-transparent outline-0 p-3 ${width}`,
        },
      }}
      {...props}
      ref={ref}
      error={error}
      // TODO: theme with mui config
      className={`flex text-base bg-base-1 hover:bg-base-2 rounded outline active:outline-1 focus-within:outline-1 ${
        error ? 'outline-1 outline-error' : 'outline-0 outline-fmg-green'
      } ${width} ${className}`}
      // TODO: fill color not working
      endAdornment={error ? <InvalidIcon className="self-center fill-error mx-[-24px]" /> : null}
    />
  );
});

export default BasicInput;
