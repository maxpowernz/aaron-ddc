import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';

import { Form } from '@/components/util/form';
import { MultiTexts, MultiTextsProps } from './MultiTexts';

export default {
  title: 'Components/Form Widgets/MultiTexts',
  component: MultiTexts,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof MultiTexts>;

const schema = z.object({
  firstName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  lastName: z.string().regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
});

type FormValues = z.infer<typeof schema>;

const Template: ComponentStory<typeof MultiTexts> = (args: Partial<MultiTextsProps>) => {
  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  const fields = [
    { name: 'firstName', label: 'First name' },
    { name: 'lastName', label: 'Last name' },
  ];

  return (
    <Form model={{ schema }} uid={1} onSubmit={onSubmit}>
      <MultiTexts name="names" fields={fields} {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'Name',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
