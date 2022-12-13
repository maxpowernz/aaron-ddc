import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { IMultiTextsProps, MultiTexts } from './MultiTexts';
import { Form } from '@/src/components/context/form';

export default {
  title: 'Components/Form Widgets/MultiTexts',
  component: MultiTexts,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof MultiTexts>;

type FormValues = {
  firstName: string;
  lastName: string;
};

const Template: ComponentStory<typeof MultiTexts> = (args: Partial<IMultiTextsProps>) => {
  const form = useForm<FormValues>({
    defaultValues: { firstName: '', lastName: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  const fields = [
    { name: 'firstName', label: 'First name', rules: { pattern: /^[A-Za-z]+$/i } },
    { name: 'lastName', label: 'Last name', rules: { pattern: /^[A-Za-z]+$/i } },
  ];

  return (
    <Form form={form} onSubmit={onSubmit}>
      <MultiTexts name="names" fields={fields} {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
