import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z, ZodTypeAny } from 'zod';

import { Form } from '@/components/util/form';
import { DropdownWidget, DropdownProps } from './DropdownWidget';

export default {
  title: 'Components/Form Widgets/Dropdown',
  component: DropdownWidget,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof DropdownWidget>;

const Template: ComponentStory<typeof DropdownWidget & z.infer<ZodTypeAny>> = (args: Partial<DropdownProps> & { schema: ZodTypeAny }) => {
  const onSubmit = (data: z.infer<typeof args.schema>) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <Form model={{ schema: args.schema }} uid={1} onSubmit={onSubmit}>
      <DropdownWidget name="defaultName" {...args} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'Unit',
  name: 'unit',
  placeholder: 'Select',
  options: [
    { value: '10', label: 'Kg' },
    { value: '20', label: 'g' },
  ],
  schema: z.object({
    unit: z.object({ value: z.string(), label: z.string() }).optional(),
  }),
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
  schema: z.object({
    unit: z.object({ value: z.string().min(1, { message: 'Required' }), label: z.string() }),
  }),
};
