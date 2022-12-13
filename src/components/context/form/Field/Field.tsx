import React from 'react';
import { Control, Controller, useFormContext, useFormState } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { IInputProps } from '@/src/components/ui/inputs';

export interface IFieldProps extends IInputProps {
  control?: Control<any>;
  component: React.ComponentType<any>;
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export function useFieldGroup({
  label,
  required,
  control: defaultControl,
  options,
  fields,
  size: totalSize = 4,
  ...props
}: IFieldGroupProps) {
  const { control: contextControl } = useFormContext();
  const state = useFormState();
  console.log({ state });
  const control = defaultControl ?? contextControl;
  const render = () => (
    <div className="flex gap-3">
      <div id={`question-${name}`} className="text-base text-default flex gap-0.5 justify-end items-center font-medium w-5 h-[42px]">
        <span className="text-right">{label}</span>
        <span className="w-[12px] text-amber text-center pt-1.5">{required ? '*' : ''}</span>
      </div>

      <div className="flex gap-1.5">
        {fields.map(({ component: Comp, name: fieldName, label: subLabel, size = totalSize, rules }) => (
          <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            rules={rules}
            render={({ field: { ref, ...field }, fieldState, fieldState: { error } }) => {
              //console.log({ fieldState, field, rules });
              return (
                <div className="flex flex-col gap-1.5">
                  <Comp {...field} {...props} ref={ref} size={size} error={error} label={subLabel} options={options} />
                  {error || subLabel ? (
                    <div className={`text-xs text-${error ? 'error' : 'default opacity-75'} font-normal px-1.5`}>
                      {error?.message ?? subLabel}
                    </div>
                  ) : null}
                </div>
              );
            }}
          />
        ))}
      </div>
    </div>
  );

  return {
    label,
    required,
    render,
  };
}

export function useField({ label, name, component, required, ...props }: IFieldProps) {
  const fields = [{ name, component }];

  return useFieldGroup({ label, name, required, fields, ...props });
}
