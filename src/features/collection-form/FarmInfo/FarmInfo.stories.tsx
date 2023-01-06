import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FarmInfo } from './FarmInfo';

export default {
  title: 'forms/FarmInformation',
  component: FarmInfo,
  args: {},
  parameters: {},
} as ComponentMeta<typeof FarmInfo>;

const Template: ComponentStory<typeof FarmInfo> = (args) => {
  return (
    <>
      <FarmInfo {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
