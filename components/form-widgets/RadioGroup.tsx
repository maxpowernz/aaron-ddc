import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroupMui, { RadioGroupProps } from '@mui/material/RadioGroup';
import { FieldValues } from 'react-hook-form';

import { useField, IFieldProps, IFieldValidationProps, IOptionProps } from './Field';
import { FormControlLabel } from '@mui/material';

const CustomInput = React.forwardRef(function CustomInput(
  { options, ...props }: RadioGroupProps & IFieldValidationProps & IFieldProps & any,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  // const outline = props['data-outline'];

  return (
    <RadioGroupMui {...props} ref={ref}>
      <div className="flex items-center gap-4 mx-2">
        {options?.map(({ id, name, label, value }: IOptionProps) => {
          return (
            <FormControlLabel
              key={id}
              value={value}
              control={<Radio name={name} size="small" sx={{ padding: 0.6 }} />}
              label={label}
              componentsProps={{ typography: { sx: { fontSize: 14, fontWeight: 400 } } }}
            />
          );
        })}
      </div>
    </RadioGroupMui>
  );
});

export function RadioGroup<T extends FieldValues>({
  label,
  required,
  options,
  ...props
}: IFieldProps<T>): JSX.Element {
  const { render, field, outline } = useField<T>({ label, required, ...props });
  return render(
    <CustomInput {...field} aria-label={label} data-outline={outline} options={options} />
  );
}
