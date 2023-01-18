import React from 'react';
import InvalidIcon from '@/assets/icons/18x18/invalid.svg';
import { InputProps } from '../input-types';
import classNames from 'classnames';

export const TextInput = React.forwardRef(function TextInput(
  { error, size = 4, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  console.log(props);

  const classes = classNames(
    `input bg-gray-5 border-0 hover:bg-gray-10 focus:text-input-focus placeholder-text-placeholder rounded text-text-primary h-42 w-grid-${size}`,
    {
      'text-input-error': error,
      'text-input-disabled': props.disabled,
    }
  );

  return (
    <div className="form-control inline-flex relative">
      <input aria-label={props['aria-label']} className={classes} ref={ref} type="text" {...props} disabled={props.disabled} />
      {error && <InvalidIcon className="fill-error absolute top-3 right-3" />}
    </div>
  );
});

export default TextInput;
