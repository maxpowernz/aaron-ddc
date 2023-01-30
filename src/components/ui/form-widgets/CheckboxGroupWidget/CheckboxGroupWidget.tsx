import React, { useId } from 'react';
import { useModelContext } from '@/context/ModelContext';
import { OptionProps, Checkbox } from '@/components/ui/atoms';
import { FieldProps, useFormField, useSaveField, useScope } from '@/components/util/form';
import classNames from 'classnames';

type CheckboxGroupProps = Omit<FieldProps, 'component'> & { cols?: number };

export const CheckboxGroup = React.forwardRef(function CheckboxGroup(
  { options, size = 6, cols, ...props }: CheckboxGroupProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const groupId = useId();

  //const grid = `grid grid-cols-${cols}`;

  //const className={grid ${isOpen ? 'xl:grid-cols-3' : 'xl:grid-cols-1'} grid-cols-1 gap-6}

  const classes = classNames(`w-grid-${size} ${cols ? `grid grid-cols-${cols}` : ''}`, {});

  return (
    <div className={classes}>
      {options?.map(({ id, value, label }: OptionProps) => {
        return <Checkbox key={`${groupId}-${id}-${value}`} {...props} id={id} value={value} label={label} ref={ref} />;
      })}
    </div>
  );
});

export function CheckboxGroupWidget({ scope = {}, ...props }: CheckboxGroupProps) {
  const { table } = useModelContext();

  const saveField = useSaveField();

  const onChange = (e: Event) => {
    return saveField({
      name: props.name,
      value: (e.target as HTMLInputElement)?.value,
    });
  };

  const onBlur = (e: Event) => {
    console.log('override blur');
  };

  const otherProps = (table && { onChange, onBlur }) ?? {};

  const { render } = useFormField({
    component: CheckboxGroup,
    ...props,
    ...otherProps,
  });

  const { isVisible } = useScope(scope);

  return isVisible ? render() : <></>;
}
