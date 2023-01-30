import classNames from 'classnames';
import React from 'react';
import { CheckboxProps } from '../input-types';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function CustomInput({ error, disabled, label, ...props }, ref) {
  return (
    <>
      <div className="group inline-flex p-1.5">
        <div className="relative inline-flex">
          <input
            {...props}
            id={props.id}
            name={props.name}
            ref={ref}
            type="checkbox"
            aria-invalid={Boolean(error)}
            disabled={disabled}
            value={props.value}
            defaultChecked={props.defaultChecked}
            className={classNames(
              `checkbox checkbox-primary no-animation w-4.5 h-4.5 ring-1 ring-gray-25 ring-inset border-0 rounded checked:ring-0 focus-visible:border-0 focus-visble:ring-0 focus-visible:outline-none`,
              {
                'checkbox-error': error,
                'disabled:ring-gray-15 disabled:bg-gray-5 disabled:checked:opacity-50 disabled:opacity-100': disabled,
              }
            )}
          />
          <div
            className={`rounded-full ${
              disabled ? 'group-hover:bg-none' : 'group-hover:bg-primary'
            } bg-white absolute opacity-20 w-[30px] h-[30px] -z-20 m-auto top-[9px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease-in`}
          ></div>
        </div>
        <label htmlFor={props.id} className={`ml-1.5 leading-tight ${disabled && 'text-text-disabled'}`}>
          {label}
        </label>
      </div>
    </>
  );
});

export default Checkbox;
