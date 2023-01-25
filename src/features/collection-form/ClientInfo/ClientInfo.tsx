import * as React from 'react';

import * as model from '@/model/client-info.db';
import { Form } from '@/components/util/form';
import { MultiTexts, RadioGroupWidget, Textarea, TextInputWidget } from '@/components/ui/form-widgets';
import { AppendableList } from '@/components/util/form/AppendableList/AppendableList';
import { CheckboxGroupWidget } from '@/components/ui/form-widgets/CheckboxGroupWidget/CheckboxGroupWidget';

export function ClientInfo(props = {}) {
  const onSubmit = (data: model.FormValues) => console.log('Submit:', data);

  const accountTypes = [
    { id: 'person', label: 'Person', value: 'person' },
    { id: 'collective', label: 'Collective', value: 'col' },
    { id: 'trust', label: 'Trust', value: 'trust' },
    { id: 'partnership', label: 'Partnership', value: 'partnership' },
    { id: 'trader', label: 'Trader', value: 'trader' },
    { id: 'ltd', label: 'Limited Company', value: 'ltd' },
    { id: 'other', label: 'Other', value: 'other' },
  ];

  const stmtDeliveryMethods = [
    { id: 'post', label: 'Post', value: 'post' },
    { id: 'email', label: 'Email', value: 'email' },
  ];

  return (
    <Form model={model} uid={1} onSubmit={onSubmit}>
      <CheckboxGroupWidget name="checkboxes" question="do you have these" options={accountTypes} cols={3} size={10} />
      <RadioGroupWidget name="accountType" question="Account type" options={accountTypes} cols={3} size={10} required />
      <TextInputWidget
        name="accountTypeOther"
        question="Please specify account type"
        size={12}
        required
        scope={{ source: 'accountType', condition: 'other' }}
      />
      <TextInputWidget
        name="accountName"
        question="Account name"
        aria-label="this is the aria label"
        label="this is the label"
        size={10}
        required
      />
      <AppendableList question="Friends" addButtonLabel="Add Friend" name="friends" required>
        <TextInputWidget name="friend" size={12} />
      </AppendableList>
      <TextInputWidget name="mailName" question="Mail name" size={9} placeholder="Add Mail Name if different from Account Name" />
      <Textarea name="associatedEntities" question="Associated entities" size={12} />
      <TextInputWidget name="accountOwner" question="Account owner" size={6} required />
      <MultiTexts
        name="emails"
        question="Owner email addresses"
        required
        fields={[
          { name: 'emails.email1', label: 'Primary' },
          { name: 'emails.email2', label: 'Other' },
        ]}
      />
      <RadioGroupWidget name="statementDelivery" question="Statement delivery" options={stmtDeliveryMethods} required />
      <RadioGroupWidget name="shouldRegister" question="Register for FMG Connect" required />
      <TextInputWidget name="industryType" question="Industry type" size={12} required placeholder="Primary source of income" />
      <Textarea
        name="otherActivities"
        question="What other income generating activities are you involved in?"
        size={12}
        placeholder="For example: Beekeeping, Frestry, Orchard Fruit, etc..."
      />
    </Form>
  );
}
