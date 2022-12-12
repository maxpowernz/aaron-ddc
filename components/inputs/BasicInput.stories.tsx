import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BasicInput } from '@/components/inputs/BasicInput';

export default {
  title: 'CustomInputs/BasicInput',
  component: BasicInput,
  args: {},
  parameters: {},
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => {
  return (
    <>
      <div className="hidden sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10" />
      <div className="hidden w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12" />
      <BasicInput {...args} />
    </>
  );
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
  size: 2,
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
