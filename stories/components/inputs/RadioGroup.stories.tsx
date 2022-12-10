import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioGroup } from '@/components/inputs/RadioGroup';

export default {
  title: 'CustomInputs/RadioGroup',
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
};
