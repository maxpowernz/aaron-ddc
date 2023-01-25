import React, { useId } from 'react';
import { useModelContext } from '@/context/ModelContext';
import { OptionProps, Checkbox, CheckboxProps } from '@/components/ui/atoms';
import { FieldProps, useFormField, useSaveField, useScope } from '@/components/util/form';

export const CheckboxInput = React.forwardRef(function CheckboxInput(
  { options, size = 6, cols, ...props }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const groupId = useId();
  const layout = cols ? `grid grid-cols-1 sm:grid-cols-${cols}` : 'flex flex-wrap';
  //const layout = `grid grid-cols-3`;

  return (
    <div className={`${layout} w-grid-${size} items-center gap-y-1 gap-x-4 mx-2 h-full`}>
      {options?.map(({ id, value, label }: OptionProps) => {
        return <Checkbox key={`${groupId}-${id}-${value}`} id={id} {...props} label={label} ref={ref} cols={5} />;
      })}
    </div>
  );
});

export function CheckboxGroupWidget({ scope = {}, ...props }: CheckboxProps): JSX.Element {
  const { table } = useModelContext();
  const saveField = useSaveField();

  const onChange = (e: Event) => {
    return saveField({
      name: props.name,
      value: (e.target as HTMLInputElement)?.value,
    });
  };

  const otherProps = (table && { onChange }) ?? {};

  const { render } = useFormField({
    ...props,
    component: CheckboxInput,
    ...otherProps,
  });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
