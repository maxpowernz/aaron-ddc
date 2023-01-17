import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {},
  parameters: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <>
      <div className="hidden sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10" />
      <div className="hidden w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12" />
      <div className="hidden text-error" />
      <Checkbox {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  name: 'firstName',
  pattern: String(/[a-zA-Z]/),
  placeholder: 'First Name',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const elem = await canvas.getByRole('textbox');
  await userEvent.click(elem);
  await expect(elem.closest('div')).toHaveClass('Mui-focused');
  await userEvent.tab();
  await expect(elem.closest('div')).not.toHaveClass('Mui-focused');
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Default.args,
  placeholder: 'First Name',
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
  const elem = await canvas.getByRole('textbox');
  await expect(elem.closest('div')).toHaveClass('Mui-error');
};

export const DateType = Template.bind({});
DateType.args = {
  id: 'date',
  name: 'date',
  type: 'date',
};
