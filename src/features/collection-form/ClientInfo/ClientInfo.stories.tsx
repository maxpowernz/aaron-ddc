import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ClientInfo } from './ClientInfo';

export default {
  title: 'forms/ClientInformation',
  component: ClientInfo,
  args: {},
  parameters: {},
} as ComponentMeta<typeof ClientInfo>;

const Template: ComponentStory<typeof ClientInfo> = (args) => {
  return (
    <>
      <ClientInfo {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
