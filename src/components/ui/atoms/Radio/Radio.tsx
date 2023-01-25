import React from 'react';
import { InputProps } from '@/components/ui/atoms';
import classnames from 'classnames';

export type RadioProps = InputProps & { checked?: boolean };

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function CustomInput(
  { error, checked, className, disabled, label, value, ...props },
  ref
) {
  const CENTER_ROUND = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full';
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
        id="checkmark"
        className={classnames(
          `${CENTER_ROUND} w-[18px] h-[18px] border border-1 border-gray-25 peer-checked:bg-fmg-green peer-checked:border-0`,
          {
            'bg-fmg-green border-0': checked && !isError,
            'peer-checked:bg-error bg-error': checked && isError,
            'opacity-50': checked && disabled,
            'bg-gray-10': disabled,
          }
        )}
      />
      <div
        id="checkcenter"
        className={classnames(`${CENTER_ROUND} w-1.5 h-1.5 peer-checked:bg-white`, {
          'bg-white border-0': checked,
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
