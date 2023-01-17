import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BasicInput } from '@/components/ui/inputs/BasicInput/BasicInput';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Atoms/BasicInput',
  component: BasicInput,
  args: {},
  parameters: {},
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => {
  return (
    <>
      <div className="hidden sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10" />
      <div className="hidden w-grid-1 w-grid-2 w-grid-3 w-grid-4 w-grid-5 w-grid-6 w-grid-7 w-grid-8 w-grid-9 w-grid-10 w-grid-11 w-grid-12" />
      <div className="hidden text-error" />
      <BasicInput {...args} />
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

export const Size2 = Template.bind({});
Size2.args = {
  ...Default.args,
  size: 2,
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
