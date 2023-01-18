import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Textarea } from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: { 'data-testid': 'textarea' },
  parameters: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'firstName',
  pattern: String(/[a-zA-Z]/),
};

export const FixedSized = Template.bind({});
FixedSized.args = {
  ...Default.args,
  autosize: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect((await canvas.getByTestId('textarea')).closest('div')).toHaveClass('Mui-disabled');
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Placeholder.args,
  placeholder: 'This is a placeholder',
};

export const PlaceholderDisabled = Template.bind({});
PlaceholderDisabled.args = {
  ...Placeholder.args,
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  error: true,
};
Invalid.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect((await canvas.getByTestId('textarea')).closest('div')).toHaveClass('Mui-error');
};
