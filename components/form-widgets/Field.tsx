import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { IOptionProps } from 'components/inputs';

export interface IFieldProps {
  control: Control<any>;
  component: React.ComponentType<any>;
  label?: string;
  name: string;
  options?: IOptionProps[];
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  size?: number;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export function useFieldGroup({
  label,
  required,
  control,
  options,
  fields,
  size: totalSize = 4,
  ...props
}: IFieldGroupProps) {
  const render = () => (
    <>
      <div className="flex gap-2">
        <div
          id={`question-${label}`}
          className="text-sm p-1 flex gap-0.5 justify-end align-middle font-medium w-5"
        >
          <span>{label}</span>
          <span className="w-[1em] p-0.5 text-amber text-center">{required ? '*' : ''}</span>
        </div>
        {fields.map(
          ({ component: Comp, name: fieldName, label: subLabel, size = totalSize, rules }) => (
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
                      {...props}
                      ref={ref}
                      size={size}
                      error={error}
                      label={subLabel}
                      options={options}
                    />
                    {isTouched || isDirty || error ? (
                      <>
                        <div className="text-error">{'isTouched: ' + String(isTouched)}</div>
                        <div className="text-error">{'isDirty: ' + String(isDirty)}</div>
                        <div className="text-error">{'error: ' + error?.type}</div>
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
