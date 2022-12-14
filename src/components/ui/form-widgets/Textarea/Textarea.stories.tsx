import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Form } from '@/src/components/util/form';
import { ITextareaProps, Textarea } from './Textarea';
import {z} from "zod";

export default {
  title: 'Components/Form Widgets/Textarea',
  component: Textarea,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Textarea>;

const schema = z.object({
  otherActivities: z.string(),
});

type FormValues = z.infer<typeof schema>;

const Template: ComponentStory<typeof Textarea> = (args: Partial<ITextareaProps>) => {

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <Textarea name="otherActivities" {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Other sctivities',
  name: 'otherActivities',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const Size12 = Template.bind({});
Size12.args = {
  ...Default.args,
  size: 12,
};

export const AlphaOnly = Template.bind({});
AlphaOnly.args = {
  ...Default.args,
  rules: { pattern: /^[A-Za-z]+$/i },
};
