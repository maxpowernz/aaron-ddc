import React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { FieldHookConfig, useField } from 'formik';

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      slotProps={{
        input: {
          className:
            'bg-stone-100 rounded-sm outline outline-0 outline-fmg-green active:outline-1  focus:outline-1 p-1',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

type TextFieldProps = InputUnstyledProps &
  FieldHookConfig<string> & {
    label: string;
    required: boolean;
  };

export function TextField({ label, required, ...props }: TextFieldProps): JSX.Element {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label className="flex gap-2">
        <div className="text-sm align-baseline p-1 flex gap-0.5 align-middle">
          <span>{label}</span>
          <span className="w-2 p-0.5 text-amber-500 text-center">{required ? '*' : ''}</span>
        </div>
        <CustomInput aria-label="Demo input" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
}
