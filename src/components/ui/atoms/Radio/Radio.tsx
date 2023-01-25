import React from 'react';
import { InputProps } from '@/components/ui/atoms';
import classnames from 'classnames';

export type RadioProps = InputProps & { checked?: boolean };

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function CustomInput(
  { error, checked, className, disabled, label, value, ...props },
  ref
) {
  const CENTER_ROUND = 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full';
  const isError = Boolean(error);

  return (
      <label
        className={classnames(
          'group flex items-center',
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
          className={classnames('relative flex w-[30px] h-[30px] rounded-full transition duration-300', {
            'hover:bg-inherit transition-none': disabled,
            'cursor-pointer group-hover:bg-fmg-green-20': !disabled && !isError,
            'group-hover:bg-error-20': !disabled && isError,
          })}
        >
          <input value={value} type="radio" name="radio" ref={ref} disabled={disabled} className={classnames(`peer opacity-0`, {})} />
          <div
            id="checkmark"
            className={classnames(
              `${CENTER_ROUND} w-[18px] h-[18px] border border-1 border-gray-25 peer-checked:bg-fmg-green peer-checked:border-0`,
              {
                'bg-fmg-green border-0': checked && !disabled && !isError,
                'peer-checked:bg-error bg-error': checked && !disabled && isError,
                'bg-gray-10': disabled,
              }
            )}
          />
          <div
            id="checkcenter"
            className={classnames(`${CENTER_ROUND} w-1.5 h-1.5 peer-checked:bg-white`, {
              'bg-white border-0': checked && !disabled,
            })}
          />
        </div>
        <span className="">{label}</span>
      </label>
  );
});

export default Radio;
