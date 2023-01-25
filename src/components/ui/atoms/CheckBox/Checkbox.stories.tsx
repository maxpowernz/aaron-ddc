import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    id: '01',
    label: 'Label',
    name: 'checkbox',
    'aria-label': 'Checkbox',
    disabled: false,
  },
  argTypes: {},
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

export const Checked = Template.bind({});
Checked.args = { defaultChecked: true };

export const CheckedInvalid = Template.bind({});
CheckedInvalid.args = {
  defaultChecked: true,
  error: true,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  defaultChecked: true,
};
