import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

export interface IFieldProps<T extends FieldValues = {}> extends UseControllerProps<T> {
  label?: string;
  required?: boolean;
  options?: IOptionProps[];
}

export interface IFieldValidationProps extends ControllerRenderProps {
  pattern?: string;
  'data-outline'?: string;
}

export interface IOptionProps {
  value: string;
  name: string;
  label: string;
  id: string;
}

export function useField<T extends FieldValues>({ label, required, ...props }: IFieldProps<T>) {
  const { rules } = props;
  const { field, fieldState, formState } = useController({
    ...props,
    rules: { ...rules, required },
  });

  const { isDirty, isTouched, error } = fieldState;

  const hasError = (error && (isDirty || isTouched)) || (required && isTouched && !field.value);
  const outline = hasError ? 'outline-orange-700 outline-1' : 'outline-fmg-green';
  const render: Function = (Comp: JSX.Element) => (
    <>
      <label className="flex gap-2">
        <div className="text-sm align-baseline p-1 flex gap-0.5 align-middle font-medium">
          <span>{label}</span>
          <span className="w-2 p-0.5 text-amber-500 text-center">{required ? '*' : ''}</span>
        </div>
        {Comp}
      </label>
      {fieldState.isTouched || fieldState.isDirty || fieldState.error ? (
        <>
          <div className="error">{'isTouched: ' + String(fieldState.isTouched)}</div>
          <div className="error">{'isDirty: ' + String(fieldState.isDirty)}</div>
          <div className="error">{'error: ' + fieldState?.error?.type}</div>
        </>
      ) : null}
    </>
  );

  console.log({ field, rules, required });

  return {
    label,
    required,
    render,
    field: { ...field, ...rules, error: hasError },
    formState,
    fieldState,
    outline,
  };
}
