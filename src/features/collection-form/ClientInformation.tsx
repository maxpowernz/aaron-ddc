import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Text } from '@/src/components/ui/form-widgets/Text/Text';
import { RadioGroup } from '@/src/components/ui/form-widgets/RadioGroup/RadioGroup';

type FormValues = {
  accountType: string;
  accountName: string;
  mailName: string;
  associatedEntities: string;
  accountOwner: string;
  statementDelivery: string;
  shouldRegister: boolean;
  industryType: string;
  otherActivities: string;
};

export function ClientInformation(props = {}) {
  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => console.log('Submit:', data);

  const accountTypes = [
    { id: 'person', label: 'Person', value: 'person' },
    { id: 'collective', label: 'Collective', value: 'col' },
    { id: 'trust', label: 'Trust', value: 'trust' },
    { id: 'partnership', label: 'Partnership', value: 'partnership' },
    { id: 'trader', label: 'Trader', value: 'trader' },
    { id: 'ltd', label: 'Limited Company', value: 'ltd' },
    { id: 'other', label: 'Other', value: 'other' },
  ];

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup
        cols={3}
        control={control}
        name="accountType"
        label="Account type"
        options={accountTypes}
      />
      <Text control={control} name="accountName" label="Account name" />
    </form>
  );
}
