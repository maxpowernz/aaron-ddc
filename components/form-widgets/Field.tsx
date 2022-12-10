import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { IOptionProps, Sizes } from 'components/inputs';

export interface IFieldProps {
  control: Control<any>;
  component: React.ComponentType<any>;
  label?: string;
  name: string;
  options?: IOptionProps[];
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  size?: Sizes;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export function useFieldGroup({ label, required, control, options, fields }: IFieldGroupProps) {
  const render = () => (
    <>
      <div className="flex gap-2">
        <div
          id={`question-${label}`}
          className="text-sm align-baseline p-1 flex gap-0.5 align-middle font-medium"
        >
          <span>{label}</span>
          <span className="w-2 p-0.5 text-amber-500 text-center">{required ? '*' : ''}</span>
        </div>
        {fields.map(
          ({ component: Comp, name: fieldName, label: subLabel, size = Sizes.w1, rules }) => (
            <Controller
              key={fieldName}
              name={fieldName}
              control={control}
              rules={rules}
              render={({ field: { ref, ...field }, fieldState: { isTouched, isDirty, error } }) => {
                return (
                  <div className="flex flex-col">
                    <Comp
                      {...field}
                      inputRef={ref}
                      size={size}
                      error={error}
                      label={subLabel}
                      options={options}
                    />
                    {isTouched || isDirty || error ? (
                      <>
                        <div className="error">{'isTouched: ' + String(isTouched)}</div>
                        <div className="error">{'isDirty: ' + String(isDirty)}</div>
                        <div className="error">{'error: ' + error?.type}</div>
                      </>
                    ) : null}
                  </div>
                );
              }}
            />
          )
        )}
      </div>
    </>
  );

  return {
    label,
    required,
    render,
  };
}

export function useField({ label, name, rules, component, required, ...props }: IFieldProps) {
  const fields = [{ name, rules: { ...rules, required }, component }];

  return useFieldGroup({ label, name, required, fields, ...props });
}
