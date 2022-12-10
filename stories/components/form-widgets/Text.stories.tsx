import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Text } from '@/components/form-widgets/Text';

export default {
  title: 'FormWidgets/TextField',
  component: Text,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof Text>;

type FormValues = {
  firstName: '';
};
const Template: ComponentStory<typeof Text<FormValues>> = (args) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { firstName: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text<FormValues> control={control} {...args} />
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
  rules: { pattern: /^[A-Za-z]+$/i },
};
