import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    label: 'Label',
    name: 'checkbox',
    options: [{ value: '10', label: 'Kg' }],
  },
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
  },
  parameters: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <>
      <Checkbox {...args} />
    </>
  );
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Label',
  name: 'checkbox',
  options: [{ value: '10', label: 'Kg' }],
  error: false,
  disabled: false,
  'aria-label': 'Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Label',
  name: 'checkbox',
  options: [{ value: '10', label: 'Kg' }],
  error: false,
  disabled: false,
  'aria-label': 'Checkbox',
  checked: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  ...DisabledChecked.args,
  disabled: true,
  checked: true,
};

export const CheckedInvalid = Template.bind({});
CheckedInvalid.args = {
  ...DisabledChecked.args,
  disabled: false,
  checked: true,
  error: true,
};
