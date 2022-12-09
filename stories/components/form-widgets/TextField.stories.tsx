import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextField } from 'components/form-widgets/TextField';

export default {
  title: 'FormWidgets/TextField',
  component: TextField,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof TextField>;

type FormValues = {
  firstName: '';
};
const Template: ComponentStory<typeof TextField<FormValues>> = (args) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { firstName: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField<FormValues> control={control} {...args} />
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'First name',
  name: 'firstName',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const AlphaOnly = Template.bind({});
AlphaOnly.args = {
  ...Default.args,
  rules: { required: true, pattern: /^[A-Za-z]+$/i },
};
