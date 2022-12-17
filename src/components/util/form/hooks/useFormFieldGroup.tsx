import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import { IInputProps } from '@/src/components/ui/inputs';
import { useSaveField } from './useSaveField';

export interface IFieldProps extends IInputProps {
  question?: string;
  control?: Control;
  component: React.ComponentType<any>;
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control' | 'question'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export function useFormFieldGroup({
  question,
  name,
  required,
  control: defaultControl,
  fields,
  size: totalSize = 4,
  ...props
}: IFieldGroupProps) {
  const { control: contextControl } = useFormContext();
  const saveField = useSaveField();
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
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="flex flex-col gap-1.5">
                  <Comp
                    {...field}
                    {...props}
                    value={field.value ?? ''}
                    name={fieldName}
                    size={size}
                    error={error}
                    label={label}
                    onBlur={() => {
                      field.onBlur();
                      saveField(field);
                    }}
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

  return { question, required, render };
}
