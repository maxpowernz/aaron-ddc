import React from 'react';

import BasicInput from '@/src/components/ui/inputs/BasicInput/BasicInput';
import { FieldGroupProps, TargetFieldProps, useFormFieldGroup } from '@/src/components/util/form';

export type MultiTextsProps = Omit<FieldGroupProps, 'fields'> & {
  fields: Omit<TargetFieldProps, 'component'>[];
};

export function MultiTexts(props: MultiTextsProps): JSX.Element {
  const { fields: origFields } = props;
  const fields = origFields.map((field) => ({ ...field, component: BasicInput }));
  const { render } = useFormFieldGroup({ ...props, fields });
  return render();
}
