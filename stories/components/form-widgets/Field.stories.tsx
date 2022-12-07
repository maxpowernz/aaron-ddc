import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Field } from 'formik';
import { withFormik } from '@bbbtech/storybook-formik';

export default {
  decorators: [withFormik],
  title: 'FormWidgets/Field',
  component: Field,
  parameters: {},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  className: 'bg-stone-300',
  name: 'firstName',
  placeholder: 'First Name',
  value: '',
};
