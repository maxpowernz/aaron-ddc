import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';
import { Form } from '@/components/util/form';
import { CheckboxGroupWidget } from './CheckboxGroupWidget';
import { CheckboxProps } from '@/components/ui/atoms';

export default {
  title: 'Components/Form Widgets/Checkbox',
  component: CheckboxGroupWidget,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof CheckboxGroupWidget>;

const schema = z.object({
  firstName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
});

type FormValues = z.infer<typeof schema>;

const Template: ComponentStory<typeof CheckboxGroupWidget> = (args: Partial<CheckboxProps>) => {
  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema }} uid={1} onSubmit={onSubmit}>
      <CheckboxGroupWidget name="user" {...args} size={12} cols={3} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'First name',
  name: 'firstName',
  options: [
    { id: '1', name: 'Tom', label: 'Tom', value: 'Tom' },
    { id: '2', name: 'John', label: 'John', value: 'John' },
    { id: '3', name: 'Jason', label: 'Jason', value: 'Jason' },
    { id: '4', name: 'Fred', label: 'Fred', value: 'Fred' },
    { id: '5', name: 'Bill', label: 'Bill', value: 'Bill' },
    { id: '6', name: 'Aaron', label: 'Aaron', value: 'Aaron' },
    { id: '7', name: 'Alex', label: 'Alex', value: 'Alex' },
    { id: '8', name: 'Hazel', label: 'Hazel', value: 'Hazel' },
    { id: '9', name: 'Callum', label: 'Callum', value: 'Callum' },
    { id: '10', name: 'Tim', label: 'Tim', value: 'Tim' },
    { id: '11', name: 'Lesley', label: 'Lesley', value: 'Lesley' },
    { id: '12', name: 'Shaun', label: 'Shaun', value: 'Shaun' },
  ],
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
