import React, { Children, cloneElement, useEffect, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import AddIcon from '@/assets/icons/18x18/plus.svg';

type AppendableListProps = {
  question: string;
  addButtonLabel: string;
  required?: boolean;
  name: string;
  min?: number;
  max?: number;
  children: React.ReactElement | React.ReactElement[];
};

export function AppendableList({ question, name, required, addButtonLabel, min = 1, children }: AppendableListProps) {
  const { control, watch } = useFormContext();
  const { fields, append } = useFieldArray({ control, name });
  const watchFieldArray = watch(name);

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const rows = useRef(controlledFields.length ? 0 : min);

  useEffect(() => {
    for (let i = 0; i < rows.current; i++) {
      append({});
    }
  }, [append]);

  return (
    <>
      {controlledFields.map((field, fieldIdx) => {
        return (
          <React.Fragment key={fieldIdx}>
            {Children.map(children, (child) => {
              // TODO: Can this be replaced with form group field??
              // console.log({ child, childIdx, fieldIdx });
              return cloneElement(child as JSX.Element, {
                name: `${name}.${fieldIdx}.${child.props.name}`,
                question: fieldIdx === 0 ? question : '',
                required: fieldIdx === 0 ? required : false,
                'aria-label': `${child.props.name} ${fieldIdx + 1}`,
              });
            })}
          </React.Fragment>
        );
      })}
      <div className="form-fields">
        <button
          type="button"
          onClick={append}
          className="flex gap-2.5 btn btn-ghost normal-case text-secondary font-normal hover:bg-secondary hover:bg-opacity-5 p-3"
        >
          <AddIcon className="fill-secondary" />
          {addButtonLabel}
        </button>
      </div>
    </>
  );
}
