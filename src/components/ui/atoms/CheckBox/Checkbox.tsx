import React, { useId } from 'react';
import { CheckboxProps } from '../input-types';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { error, disabled, label, ...props },
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const id = useId();

  return (
    <>
      <div className="group inline-flex">
        <div className="relative inline-flex">
          <input
            id={id}
            name={props.name}
            ref={ref}
            type="checkbox"
            aria-invalid={Boolean(error)}
            className={`checkbox
            no-animation
          w-4.5 h-4.5
          ring-1 ring-gray-25 ring-inset 
          border-0 
          rounded
          checked:ring-0      
          disabled:bg-gray-25
          disabled:ring-gray-100
          ${error ? 'checkbox-error' : 'checkbox-primary'}          
          ${disabled ? 'checkbox-primary disabled:opacity-50' : ''}          
          `}
            disabled={disabled}
            checked={props.checked}
          />
          <div
            className={`rounded-full 
          ${disabled || error ? 'group-hover:bg-none' : 'group-hover:bg-primary'}
          bg-white
          absolute 
          opacity-20
          w-[28px] h-[28px]  
          -z-20 
          m-auto 
          top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2
          transition-colors duration-300 ease-in
          `}
          ></div>
        </div>
        <label htmlFor={id} className={`ml-[6px] leading-tight ${disabled && 'text-text-disabled'}`}>
          {label}
        </label>
      </div>
    </>
  );
});

export default Checkbox;
