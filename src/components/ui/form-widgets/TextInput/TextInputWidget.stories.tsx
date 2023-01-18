import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z, ZodTypeAny } from 'zod';

import { Form } from '@/components/util/form';
import { TextInputWidget, TextProps } from './TextInputWidget';

export default {
  title: 'Components/Form Widgets/TextInput',
  component: TextInputWidget,
  args: {
    label: '',
    required: false,
  },
  parameters: {},
} as ComponentMeta<typeof TextInputWidget>;

const Template: ComponentStory<typeof Text & z.infer<ZodTypeAny>> = (args: Partial<TextProps> & { schema: ZodTypeAny }) => {
  const onSubmit = (data: z.infer<typeof args.schema>) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema: args.schema }} uid={1} onSubmit={onSubmit}>
      <TextInputWidget name="otherActivities" {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'First name',
  name: 'firstName',
  schema: z.object({
    firstName: z.string().optional(),
  }),
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
  schema: z.object({
    firstName: z.string().min(1, { message: 'Required' }),
  }),
};

export const AlphaOnly = Template.bind({});
AlphaOnly.args = {
  ...Default.args,
  schema: z.object({
    firstName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  }),
};
