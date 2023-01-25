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
    { value: '10', label: 'Option one' },
    { value: '20', label: 'Option two' },
    { value: '30', label: 'Option three' },
    { value: '40', label: 'Option four' },
    { value: '50', label: 'Option five' },
    { value: '60', label: 'Option six' },
    { value: '70', label: 'Option seven' },
    { value: '80', label: 'Option eight' },
    { value: '90', label: 'Option nine' },
    { value: '100', label: 'Option ten' },
    { value: '110', label: 'Option eleven' },
    { value: '120', label: 'Option twelve' },
    { value: '130', label: 'Option thirteen' },
    { value: '140', label: 'Option fourteen' },
    { value: '150', label: 'Selected option' },
  ],
  defaultValue: '',
};

export const NoOptions = Template.bind({});
NoOptions.args = {
  ...Default.args,
  noOptionsMessage: () => <>No data</>,
  options: [],
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: { value: '150', label: 'Selected option' },
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Filled.args,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
