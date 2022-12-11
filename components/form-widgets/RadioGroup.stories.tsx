import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { IRadioGroupProps, RadioGroup } from '@/components/form-widgets/RadioGroup';

export default {
  title: 'FormWidgets/RadioGroup',
  component: RadioGroup,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof RadioGroup>;

type FormValues = {
  firstName: '';
};
const Template: ComponentStory<typeof RadioGroup> = (args: Partial<IRadioGroupProps>) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { firstName: '' },
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup name="user" control={control} {...args} />
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'First name',
  name: 'firstName',
  options: [
    { id: '1', name: 'Tom', label: 'Tom', value: 'Tom' },
    { id: '2', name: 'John', label: 'John', value: 'John' },
    { id: '3', name: 'Jason', label: 'Jason', value: 'Jason' },
  ],
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
