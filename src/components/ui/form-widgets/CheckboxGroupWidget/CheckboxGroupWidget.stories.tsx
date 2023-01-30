import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';
import { Form } from '@/components/util/form';
import { CheckboxGroupWidget } from './CheckboxGroupWidget';
import { CheckboxProps } from '@/components/ui/atoms';
import * as model from './db/checkBox.db';

export default {
  title: 'Components/Form Widgets/Checkbox',
  component: CheckboxGroupWidget,
  args: {},
  parameters: {},
} as ComponentMeta<typeof CheckboxGroupWidget>;

type FormValues = z.infer<typeof model.schema>;

const Template: ComponentStory<typeof CheckboxGroupWidget> = (args: Partial<CheckboxProps>) => {
  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data));
  };

  console.log(args);

  return (
    <Form model={model} uid={1} onSubmit={onSubmit}>
      <CheckboxGroupWidget {...args} name="accountTypes" />
      <p></p>
      <button className="btn btn-primary btn-sm w-20" type="submit">
        Submit
      </button>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  question: 'Account type',
  options: [
    { id: 'accountType', label: 'Person', value: 'person' },
    { id: 'accountType', label: 'Collective', value: 'col' },
    { id: 'accountType', label: 'Trust', value: 'trust' },
    { id: 'accountType', label: 'Partnership', value: 'partnership' },
    { id: 'accountType', label: 'Trader', value: 'trader' },
    { id: 'accountType', label: 'Limited Company', value: 'ltd' },
    { id: 'accountType', label: 'Other', value: 'other' },
  ],
  cols: 2,
  size: 10,
};

// export const Required = Template.bind({});
// Required.args = {
//   ...Default.args,
//   required: true,
// };
