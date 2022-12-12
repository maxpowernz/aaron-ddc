import React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { IInputProps } from '../input-types';

export type BasicInputProps = InputUnstyledProps & IInputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { className, error, label, pattern, size = 4, ...props }: BasicInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;
  return (
    <>
      <label className="flex flex-col-reverse gap-1">
        <div className="text-xs text-default opacity-75 font-normal px-1.5">{label}</div>
        <InputUnstyled
          slotProps={{
            input: {
              'aria-label': label ?? props.name,
              pattern,
              className: `bg-base-1 hover:bg-base-2 rounded-sm outline active:outline-1 focus:outline-1 p-1 ${
                error ? 'outline-1 outline-error' : 'outline-0 outline-fmg-green'
              } ${width} ${className}`,
            },
          }}
          {...props}
          ref={ref}
          error={error}
        />
      </label>
    </>
  );
});

export default BasicInput;
