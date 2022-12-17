import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: {},
  parameters: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return (
    <>
      <Textarea {...args} />
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

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Placeholder.args,
  placeholder: 'This is a placeholder',
};

export const PlaceholderDisabled = Template.bind({});
PlaceholderDisabled.args = {
  ...Placeholder.args,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};
