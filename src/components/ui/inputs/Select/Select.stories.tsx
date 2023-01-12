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
  return (
    <div className="">
      <Select {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Metric',
  name: 'metric',
  placeholder: 'Select',
  options: [
    { value: '10', label: 'Kg' },
    { value: '20', label: 'g' },
    { value: '30', label: 'g' },
    { value: '40', label: 'g' },
    { value: '50', label: 'g' },
    { value: '60', label: 'gggggggggggggggggggggggggggggggg' },
    { value: '70', label: 'g' },
    { value: '80', label: 'g' },
    { value: '90', label: 'g' },
    { value: '100', label: 'g' },
    { value: '110', label: 'g' },
    { value: '120', label: 'g' },
    { value: '130', label: 'g' },
    { value: '140', label: 'g' },
  ],
  defaultValue: '',
};
