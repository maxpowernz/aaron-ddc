import * as React from 'react';

import * as model from '@/model/farm-info.db';
import { Form } from '@/components/util/form';
import { MultiTexts, RadioGroup, Text, Textarea } from '@/components/ui/form-widgets';

export function FarmInfo(props = {}) {
  const onSubmit = (data: model.FormValues) => console.log('Submit:', data);

  const opModels = [
    { id: 'owner', label: 'Owner operator', value: 'owner' },
    { id: 'manager', label: 'Owner & Manater', value: 'owner-manager' },
    { id: 'miker', label: 'Contract milker', value: 'milker' },
    { id: 'ownermilker', label: 'Owner & Milker', value: 'owner-milker' },
    { id: 'other', label: 'Other', value: 'other' },
  ];

  const ownerships = [
    { id: 'owned', label: 'Owned', value: 'owned' },
    { id: 'owned-leased', label: 'Owned leased', value: 'owned-leased' },
    { id: 'leased-leasee', label: 'Leased leasee', value: 'leased-leasee' },
    { id: 'shared', label: 'Shared', value: 'shared' },
  ];

  return (
    <Form model={model} uid={1} onSubmit={onSubmit}>
      <Text name="operations" question="Operations" size={12} />
      <Text name="trunover" question="Turnover" size={12} />
      <RadioGroup name="operatingModel" question="Operating model" options={opModels} cols={3} size={10} />
      <Textarea name="productionType" question="Production type/Services offered" size={12} />
      <MultiTexts
        name="productionUnits"
        question="Production units/metrics"
        fields={[
          { name: 'productionUnits.metric', label: 'Metric' },
          { name: 'productionUnits.unit', label: 'Unit' },
        ]}
      />
      <MultiTexts
        name="operatingProps"
        question="Operating properties"
        fields={[
          { name: 'operatingProps.situationOfRisk', label: 'Situation of risk' },
          { name: 'operatingProps.description', label: 'Description', size: 9 },
        ]}
      />
      <RadioGroup name="ownership" question="Ownership" options={ownerships} size={10} />
      <MultiTexts
        name="premSize"
        question="Block/Premise size"
        required
        fields={[
          { name: 'premSize.hec', label: 'Hectares' },
          { name: 'premSize.sqm', label: 'Square metres' },
        ]}
      />
      <MultiTexts
        name="numEmployees"
        question="Number of employees"
        required
        fields={[
          { name: 'numEmployees.full', label: 'Full time' },
          { name: 'numEmployees.part', label: 'Part time' },
          { name: 'numEmployees.casual', label: 'Causal' },
        ]}
      />
    </Form>
  );
}
