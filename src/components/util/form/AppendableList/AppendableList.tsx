import React, { Children, cloneElement, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import AddIcon from '@/src/assets/icons/18x18/plus.svg';
import { Button } from '@mui/material';

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

  useEffect(() => {
    for (let i = 0; i < min; i++) {
      append({});
    }
  }, [min, append]);

  return (
    <>
      {controlledFields.map((field, fieldIdx) => {
        return (
          <React.Fragment key={fieldIdx}>
            {Children.map(children, (child) => {
              // console.log({ child, childIdx, fieldIdx });
              return cloneElement(child as JSX.Element, {
                name: `${name}.${fieldIdx}.${child.props.name}`,
                question: fieldIdx === 0 ? question : '',
                required: fieldIdx === 0 ? required : false,
                'aria-label': `${addButtonLabel} ${fieldIdx + 1}`,
              });
            })}
          </React.Fragment>
        );
      })}
      <div className="form-fields">
        <Button onClick={append} color="secondary" startIcon={<AddIcon className="fill-secondary" />}>
          {addButtonLabel}
        </Button>
      </div>
    </>
  );
}
