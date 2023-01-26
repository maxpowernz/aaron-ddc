import React from 'react';
import InvalidIcon from '@/assets/icons/18x18/invalid.svg';
import { InputProps } from '../';
import classNames from 'classnames';

export const TextInput = React.forwardRef(function TextInput(
  { error, size = 4, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  console.log(props);

  const classes = classNames(
    `input text-base bg-gray-5 border-0 hover:bg-gray-10 placeholder-text-placeholder
    rounded text-text-primary h-42 w-grid-${size} focus:outline-none 
    focus:ring-1 focus:ring-inset focus:ring-primary focus:bg-gray-10`,
    {
      'outline-none ring-1 ring-inset ring-error focus:ring-error': error,
      'outline-none ring-1 ring-inset ring-gray-10 disabled:hover:bg-white disabled:bg-white disabled:placeholder-text-disabled':
        props.disabled,
    }
  );

  return (
    <div className="form-control inline-flex relative">
      <input
        aria-invalid={Boolean(error)}
        aria-label={props['aria-label']}
        className={classes}
        disabled={props.disabled}
        ref={ref}
        type="text"
        {...props}
      />
      {error && <InvalidIcon className="fill-error absolute top-3.5 right-3" />}
    </div>
  );
});

export default TextInput;
