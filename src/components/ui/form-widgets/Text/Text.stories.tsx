import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';

import { Form } from '@/src/components/util/form';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Form Widgets/TextField',
  component: Text,
  args: {
    label: '',
    required: false,
  },
  parameters: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: Partial<TextProps>) => {
  let schema = z.object({
    firstName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  });

  if (args.required) {
    schema = z.object({
      firstName: z
        .string()
        .min(1, { message: 'Required' })
        .regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
    });
  }

  type FormValues = z.infer<typeof schema>;

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema }} uid={1} onSubmit={onSubmit}>
      <div className="hidden sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10" />
      <div className="hidden w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12" />
      <Text name="firstName" {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'First name',
  name: 'firstName',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const AlphaOnly = Template.bind({});
AlphaOnly.args = {
  ...Default.args,
};
