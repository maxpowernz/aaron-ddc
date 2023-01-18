import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioGroup } from './RadioGroup';

export default {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return <RadioGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'First name',
  name: 'firstName',
  options: [
    { id: '1', name: 'Tom', label: 'Tom', value: 'Tom' },
    { id: '2', name: 'John', label: 'John', value: 'John' },
  ],
  defaultValue: 'Tom',
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  error: 'true',
};
