import React, { FormEventHandler } from 'react';
import { Control, Controller, FormProvider, useForm, useFormContext, useFormState } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { ZodType } from 'zod/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';

import { IInputProps } from '@/src/components/ui/inputs';

export interface IFieldProps extends IInputProps {
  question?: string;
  control?: Control<any>;
  component: React.ComponentType<any>;
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control' | 'question'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export function useFieldGroup({
  question,
  name,
  required,
  control: defaultControl,
  fields,
  size: totalSize = 4,
  ...props
}: IFieldGroupProps) {
  const { control: contextControl } = useFormContext();
  const state = useFormState();
  console.log({ state });
  const control = defaultControl ?? contextControl;
  const render = () => (
    <>
      <div id={`question-${name}`} className="form-question text-base text-default font-medium">
        <span className="text-right">{question}</span>
        <span className="w-[12px] text-amber text-center pt-1.5">{required ? '*' : ''}</span>
      </div>

      <div className="form-fields">
        {fields.map(({ component: Comp, name: fieldName, label, size = totalSize }) => (
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
                    error={error}
                    label={label}
                  />
                  {error || label ? (
                    <div className={`text-xs text-${error ? 'error' : 'default opacity-75'} font-normal px-1.5`}>
                      {error?.message ?? label}
                    </div>
                  ) : null}
                </div>
              );
            }}
          />
        ))}
      </div>
    </>
  );

  return {
    question,
    required,
    render,
  };
}

export function useField({ name, component, ...props }: IFieldProps) {
  const fields = [{ name, component }];

  return useFieldGroup({ name, fields, ...props });
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
