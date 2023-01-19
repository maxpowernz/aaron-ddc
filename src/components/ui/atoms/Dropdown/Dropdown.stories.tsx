import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const classes = Array.from(Array(13).keys())
    .map((key) => `w-grid-${key}`)
    .join(' ');
  return (
    <>
      <div className="w-grid-0 w-grid-1 w-grid-2 w-grid-3 w-grid-4 w-grid-5 w-grid-6 w-grid-7 w-grid-8 w-grid-9 w-grid-10 w-grid-11 w-grid-12"></div>
      <Dropdown {...args} />
    </>
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

export const NoOptions = Template.bind({});
NoOptions.args = {
  ...Default.args,
  noOptionsMessage: () => <>No data</>,
  options: [],
};

export const SelectedValue = Template.bind({});
SelectedValue.args = {
  ...Default.args,
  value: { value: '10', label: 'Kg' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  error: true,
};
