import React, { useId } from 'react';

import { useModelContext } from '@/context/ModelContext';
import { OptionProps, Radio } from '@/components/ui/atoms';
import { FieldProps, useFormField, useSaveField, useScope } from '@/components/util/form';

export type RadioGroupProps = Omit<FieldProps, 'component'> & {
  cols?: number;
};

const defaultOptions = [
  { id: 'yes', label: 'Yes', value: 'true' },
  { id: 'no', label: 'No', value: 'false' },
];

export const RadioGroupInput = React.forwardRef(function CustomInput(
  { options = defaultOptions, size = 12, cols, ...props }: RadioGroupProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const groupId = useId();
  const layout = cols ? `grid grid-cols-1 sm:grid-cols-${cols}` : 'flex flex-wrap';

  console.log({ value: props.value });
  return (
    <div className={`${layout} w-grid-${size} items-center gap-y-1 gap-x-4 mx-2 h-full`}>
      {options?.map(({ id, value, label }: OptionProps) => {
        return <Radio key={`${groupId}-${id}-${value}`} {...props} label={label} value={value} ref={ref} checked={value === props.value} />;
      })}
    </div>
  );
});

export function RadioGroupWidget({ scope = {}, ...props }: RadioGroupProps): JSX.Element {
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
    component: RadioGroupInput,
    ...otherProps,
  });
  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
