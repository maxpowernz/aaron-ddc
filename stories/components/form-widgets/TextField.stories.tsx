import withFormik from '@bbbtech/storybook-formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from 'components/form-widgets/TextField';

export default {
  title: 'FormWidgets/TextField',
  component: TextField,
  args: {
    label: '',
  },
  parameters: {},
  decorators: [withFormik],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'First name',
  name: 'firstName',
  type: 'text',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
