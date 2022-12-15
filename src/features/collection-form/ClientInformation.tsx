import * as React from 'react';
import { z } from 'zod';
import { Form } from '@/src/components/util/form';
import { MultiTexts, RadioGroup, Text, Textarea } from '@/src/components/ui/form-widgets';
import { AppendableList } from '@/src/components/util/form/AppendableList/AppendableList';

const schema = z.object({
  accountType: z.string(),
  accountName: z
    .string()
    .min(1, { message: 'Required' })
    .regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  mailName: z.string().optional(),
  associatedEntities: z.string().optional(),
  accountOwner: z.string(),
  emails: z.object({ email1: z.string().min(1, { message: 'Required' }).email(), email2: z.string().email() }),
  statementDelivery: z.string().min(1, { message: 'Required' }),
  shouldRegister: z.boolean(),
  industryType: z.string(),
  otherActivities: z.string().optional(),
  friends: z.array(z.object({ friend: z.string().min(1, { message: 'Required' }) })),
});

type FormValues = z.infer<typeof schema>;

export function ClientInformation(props = {}) {
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

  const stmtDeliveryMethods = [
    { id: 'post', label: 'Post', value: 'post' },
    { id: 'email', label: 'Email', value: 'email' },
  ];

  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <RadioGroup name="accountType" question="Account type" options={accountTypes} cols={3} size={10} required />
      <Text name="accountName" question="Account name" size={12} required />
      <AppendableList question="Friends" rowElementName="Friend" name="friends" required>
        <Text name="friend" size={12} />
      </AppendableList>
      <Text name="mailName" question="Mail name" size={9} placeholder="Add Mail Name if different from Account Name" />
      <Textarea name="associatedEntities" question="Associated entities" size={12} />
      <Text name="accountOwner" question="Account owner" size={6} required />
      <MultiTexts
        name="emails"
        question="Owner email addresses"
        required
        fields={[
          { name: 'emails.email1', label: 'Primary' },
          { name: 'emails.email2', label: 'Other' },
        ]}
      />
      <RadioGroup name="statementDelivery" question="Statement delivery" options={stmtDeliveryMethods} required />
      <RadioGroup name="shouldRegister" question="Register for FMG Connect" required />
      <Text name="industryType" question="Industry type" size={12} required placeholder="Primary source of income" />
      <Textarea
        name="otherActivities"
        question="What other income generating activities are you involved in?"
        size={12}
        placeholder="For example: Beekeeping, Frestry, Orchard Fruit, etc..."
      />
    </Form>
  );
}
