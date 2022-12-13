import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/src/components/context/form';
import { Text } from '@/src/components/ui/form-widgets/Text/Text';
import { RadioGroup } from '@/src/components/ui/form-widgets/RadioGroup/RadioGroup';
import { Textarea } from '@/src/components/ui/form-widgets/Textarea/Textarea';

const schema = z.object({
  accountType: z.string(),
  accountName: z
    .string()
    .min(1, { message: 'Required' })
    .regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  mailName: z.string().optional(),
  associatedEntities: z.string().optional(),
  accountOwner: z.string(),
  ownerEmailAddress: z.array(z.object({ email1: z.string(), email2: z.string() })),
  statementDelivery: z.string().min(1, { message: 'Required' }),
  shouldRegister: z.boolean(),
  industryType: z.string(),
  otherActivities: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ClientInformation(props = {}) {
  const form = useForm({
    resolver: zodResolver(schema),
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

  const stmtDeliveryMethods = [
    { id: 'post', label: 'Post', value: 'post' },
    { id: 'email', label: 'Email', value: 'email' },
  ];

  return (
    <Form form={form} onSubmit={onSubmit}>
      <RadioGroup name="accountType" label="Account type" options={accountTypes} cols={3} size={10} required />
      <Text name="accountName" label="Account name" size={12} required />
      <Text name="mailName" label="Mail name" size={9} placeholder="Add Mail Name if different from Account Name" />
      <Textarea name="associatedEntities" label="Associated entities" size={12} />
      <Text name="accountOwner" label="Account owner" size={6} required />
      <Text name="ownerEmailAddress" label="Owner email address" size={6} required />
      <RadioGroup name="statementDelivery" label="Statement delivery" options={stmtDeliveryMethods} required />
      <RadioGroup name="shouldRegister" label="Register for FMG Connect" required />
      <Text name="industryType" label="Industry type" size={12} required placeholder="Primary source of income" />
      <Textarea
        name="otherActivities"
        label="What other income generating activities are you involved in?"
        size={12}
        placeholder="For example: Beekeeping, Frestry, Orchard Fruit, etc..."
      />
    </Form>
  );
}
