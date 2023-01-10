import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Metric',
  name: 'metric',
  placeholder: 'Select',
  options: [{ value: 10, label: 'Kg' }],
  defaultValue: '',
};
