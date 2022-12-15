import React, { Children, cloneElement, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button';

type AppendableListType = {
  question: string;
  rowElementName: string;
  required?: boolean;
  name: string;
  min?: number;
  max?: number;
  children: React.ReactElement | React.ReactElement[];
};

export function AppendableList({ question, name, required, rowElementName, min = 1, children }: AppendableListType) {
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
          <>
            {Children.map(children, (child, childIdx) => {
              console.log({ child, childIdx, fieldIdx });
              return cloneElement(child as JSX.Element, {
                name: `${name}.${fieldIdx}.${child.props.name}`,
                question: fieldIdx === 0 ? question : '',
                required: fieldIdx === 0 ? required : false,
                'aria-label': `${rowElementName} ${fieldIdx + 1}`,
              });
            })}
          </>
        );
      })}
      <div className="flex gap-3">
        <div className="w-5" />
        <Button variant="text" onClick={append} sx={{ textTransform: 'none' }}>
          + Add {rowElementName}
        </Button>
      </div>
    </>
  );
}
