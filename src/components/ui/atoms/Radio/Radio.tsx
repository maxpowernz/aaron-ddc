import React from 'react';
import { InputProps } from '@/components/ui/atoms';
import classnames from 'classnames';

export type RadioProps = InputProps & { checked?: boolean };

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function CustomInput(
  { error, checked, className, disabled, label, ...props },
  ref
) {
  const CENTER_ROUND = 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full';
  const isError = Boolean(error);

  return (
    <label
      className={classnames(
        'group flex gap2 items-center',
        {
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
      aria-invalid={isError}
      {...props}
    >
      <div
        id="check-container"
        className={classnames('relative flex w-[30px] h-[30px] rounded-full transition duration-200', {
          'hover:bg-inherit transition-none': disabled,
          'cursor-pointer group-hover:bg-fmg-green-20': !disabled && !isError,
          'group-hover:bg-error-20': !disabled && isError,
        })}
      >
        <input checked={checked} type="radio" name="radio" ref={ref} disabled={disabled} className={classnames(`peer opacity-0`, {})} />
        <div
          id="checkmark"
          className={classnames(`${CENTER_ROUND} w-4 h-4 border border-1 border-gray-25 peer-checked:bg-fmg-green peer-checked:border-0`, {
            'peer-checked:bg-error': isError,
          })}
        />
        <div
          id="checkcenter"
          className={classnames(`${CENTER_ROUND} w-1 h-1 bg-transparent peer-checked:bg-white peer-checked:border-0`)}
        />
      </div>
      <span className="mb-0.5">{label}</span>
    </label>
  );
});

export default Radio;
