import React from 'react';

import BasicInput from 'components/inputs/BasicInput';
import { IFieldGroupProps, ITargetFieldProps, useFieldGroup } from './Field';

export interface IMultiTextsProps extends Omit<IFieldGroupProps, 'fields'> {
  fields: Omit<ITargetFieldProps, 'component'>[];
}

export function MultiTexts(props: IMultiTextsProps): JSX.Element {
  const { fields: origFields } = props;
  const fields = origFields.map((field) => ({ ...field, component: BasicInput }));
  const { render } = useFieldGroup({ ...props, fields });
  return render();
}
