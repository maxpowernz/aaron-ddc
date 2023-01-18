import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  args: {},
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  return (
    <>
      <TextInput {...args} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'firstName',
  name: 'firstName',
  pattern: String(/[a-zA-Z]/),
  placeholder: 'First Name',
  disabled: false,
  size: 4,
  error: false,
  'aria-label': 'This is an aria label',
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  defaultValue: 'Default Value',
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  defaultValue: 'Invalid Value',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const DateType = Template.bind({});
DateType.args = {
  id: 'date',
  name: 'date',
  type: 'date',
};
