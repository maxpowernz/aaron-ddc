import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { ITextProps, Text } from '@/components/form-widgets/Text';

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
const Template: ComponentStory<typeof Text> = (args: Partial<ITextProps>) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { firstName: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hidden sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10" />
      <div className="hidden w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12" />
      <Text name="firstName" control={control} {...args} />
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
