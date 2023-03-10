import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';

import { Form } from '@/components/util/form';
import { RadioGroupProps, RadioGroupWidget } from './RadioGroupWidget';

export default {
  title: 'Components/Form Widgets/RadioGroup',
  component: RadioGroupWidget,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof RadioGroupWidget>;

const schema = z.object({
  firstName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
});

type FormValues = z.infer<typeof schema>;

const Template: ComponentStory<typeof RadioGroupWidget> = (args: Partial<RadioGroupProps>) => {
  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema }} uid={1} onSubmit={onSubmit}>
      <RadioGroupWidget name="user" {...args} size={12} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'First name',
  name: 'firstName',
  options: [
    { id: '1', name: 'Tom', label: 'Tom', value: 'Tom' },
    { id: '2', name: 'John', label: 'John', value: 'John' },
    { id: '3', name: 'Jason', label: 'Jason', value: 'Jason' },
  ],
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
