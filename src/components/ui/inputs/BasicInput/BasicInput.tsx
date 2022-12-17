import React from 'react';
import classnames from 'classnames';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';

import InvalidIcon from '@/src/assets/icons/18x18/invalid.svg';
import { IInputProps } from '../input-types';

export type BasicInputProps = InputUnstyledProps & IInputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { className, error, disabled, label, pattern, size = 4, ...props }: BasicInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const width = `w-${size}`;

  // TODO: theme with mui config
  const baseStyle = classnames(`${width} flex text-base rounded outline`, {
    'outline-1 outline-base-2': disabled,
    'bg-base-1 hover:bg-base-2 outline-0 outline-fmg-green active:outline-1 focus-within:outline-1': !disabled && !error,
    'outline-1 outline-error': error,
    className,
  });

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
      disabled={disabled}
      className={baseStyle}
      // TODO: fill color not working
      endAdornment={error ? <InvalidIcon className="self-center fill-error mx-[-24px]" /> : null}
    />
  );
});

export default BasicInput;
