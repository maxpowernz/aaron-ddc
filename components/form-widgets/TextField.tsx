import React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { FieldValues } from 'react-hook-form';

import { useField, IFieldProps } from './Field';

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps | any,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const outline = props['data-outline'];
  return (
    <InputUnstyled
      slotProps={{
        input: {
          className: `bg-stone-100 rounded-sm outline outline-0 ${outline} active:outline-1 focus:outline-1 p-1`,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export function TextField<T extends FieldValues>({
  label,
  required,
  ...props
}: IFieldProps<T>): JSX.Element {
  const { render, field, outline } = useField<T>({ label, required, ...props });
  return render(<CustomInput {...field} aria-label={label} data-outline={outline} />);
}
