import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

export interface IFieldProps<T extends FieldValues = {}> extends UseControllerProps<T> {
  label?: string;
  required?: boolean;
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
        <div className="text-sm align-baseline p-1 flex gap-0.5 align-middle">
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

  return { label, required, render, field, formState, fieldState, outline };
}
