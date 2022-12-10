import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BasicInput } from '@/components/inputs/BasicInput';
import { Sizes } from '@/components/inputs';

export default {
  title: 'CustomInputs/BasicInput',
  component: BasicInput,
  args: {},
  parameters: {},
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => {
  return <BasicInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  name: 'firstName',
  pattern: String(/[a-zA-Z]/),
};

export const Size2 = Template.bind({});
Size2.args = {
  ...Default.args,
  size: Sizes.w2,
};

export const Label = Template.bind({});
Label.args = {
  ...Default.args,
  label: 'First Name',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

export const Date = Template.bind({});
Date.args = {
  id: 'date',
  name: 'date',
  type: 'date',
};
