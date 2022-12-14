import React, { FormEventHandler } from 'react';
import { Control, Controller, FieldValues, FormProvider, useForm, useFormContext, UseFormReturn, useFormState } from 'react-hook-form';
import { IInputProps } from '@/src/components/ui/inputs';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod/lib/types';

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

export function useFieldGroup({ label, name, required, control: defaultControl, fields, size: totalSize = 4, ...props }: IFieldGroupProps) {
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
        {fields.map(({ component: Comp, name: fieldName, label: subLabel, size = totalSize }) => (
          <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => {
              //console.log({ fieldState, field, rules });
              return (
                <div className="flex flex-col gap-1.5">
                  <Comp
                    {...field}
                    {...props}
                    value={field.value ?? ''}
                    name={fieldName}
                    ref={ref}
                    size={size}
                    error={Boolean(error)}
                    label={subLabel}
                  />
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

type FormType = {
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  schema: ZodType;
  onSubmit: (value?: any) => void | FormEventHandler;
  children: React.ReactElement | React.ReactElement[];
};

export function Form({ schema, onSubmit, children, mode = 'onBlur' }: FormType) {
  const form = useForm({ resolver: zodResolver(schema), mode });
  return (
    <FormProvider {...form}>
      <form className="form-container" onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
