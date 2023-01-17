import React from 'react';
import InvalidIcon from '@/assets/icons/18x18/invalid.svg';
import { InputProps } from '../input-types';

//export type BasicInputProps = Omit<InputBaseProps, 'size'> & InputProps;

export const BasicInput = React.forwardRef(function CustomInput(
  { error, disabled, label, EndAdornment, size = 4, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const width = `w-grid-${size}`;

  return (
    <>
      {/* <InputBase
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
      /> */}
      <div className={`form-control relative flex-row ${width}`}>
        <label className="label">
          <span className="label-text justify-left">{label}</span>
        </label>
        <input
          ref={ref}
          type="text"
          placeholder="Search…"
          className={`${width} bg-gray-5 ${error && 'input-error'} input input-bordered relative`}
        />
        {/* <EndAdornment className="absolute right-3 bottom-3 fill-inputs-15" /> */}
      </div>
    </>
  );
});

export default BasicInput;
