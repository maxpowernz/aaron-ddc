import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'First name',
  name: 'firstName',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  checked: true,
  error: true,
};
