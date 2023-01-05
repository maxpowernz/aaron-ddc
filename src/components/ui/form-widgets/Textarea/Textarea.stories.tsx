import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z, ZodTypeAny } from 'zod';

import { Form } from '@/src/components/util/form';
import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Components/Form Widgets/Textarea',
  component: Textarea,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea & z.infer<ZodTypeAny>> = (args: Partial<TextareaProps> & { schema: ZodTypeAny }) => {
  const onSubmit = (data: z.infer<typeof args.schema>) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema: args.schema }} uid={1} onSubmit={onSubmit}>
      <Textarea name="otherActivities" {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'Other sctivities',
  name: 'otherActivities',
  schema: z.object({
    otherActivities: z.string(),
  }),
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
  schema: z.object({
    otherActivities: z.string().min(1, { message: 'Required' }),
  }),
};

export const Size12 = Template.bind({});
Size12.args = {
  ...Default.args,
  size: 12,
};

export const AlphaOnly = Template.bind({});
AlphaOnly.args = {
  ...Default.args,
  schema: z.object({
    otherActivities: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  }),
};
