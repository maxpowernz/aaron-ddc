import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ClientInformation } from './ClientInformation';

export default {
  title: 'forms/ClientInformation',
  component: ClientInformation,
  args: {
    label: '',
  },
  parameters: {},
} as ComponentMeta<typeof ClientInformation>;

const Template: ComponentStory<typeof ClientInformation> = (args) => {
  return (
    <>
      <ClientInformation {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
