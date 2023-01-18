import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldGroupProps, FieldGroupReturn } from '../form-types';
import { useSaveField } from './useSaveField';

export function useFormFieldGroup({
  question,
  name,
  required,
  control: defaultControl,
  fields,
  size: totalSize = 4,
  ...props
}: FieldGroupProps): FieldGroupReturn {
  const { control: contextControl, ...formMethods } = useFormContext();
  const saveField = useSaveField();
  const control = defaultControl ?? contextControl;
  const render = () => (
    <>
      <div id={`question-${name}`} className="form-question text-base text-default font-medium">
        <span className="text-right">{question}</span>
        <span className="w-[0.75rem] text-warning text-center pt-1.5">
          {required ? (
            <span aria-label="required" role="img">
              *
            </span>
          ) : null}
        </span>
      </div>

      <div className="form-fields">
        {fields.map(({ component: Comp, name: fieldName, label, size = totalSize }) => (
          <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="flex flex-col p-0.5 gap-1">
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
                  {!(error || label) ? null : (
                    <div className={`text-xs text-${error ? 'error' : 'default opacity-75'} font-normal px-1.5`}>
                      {error?.message ?? label}
                    </div>
                  )}
                </div>
              );
            }}
          />
        ))}
      </div>
    </>
  );

  return { question, required, render, control, ...formMethods };
}
