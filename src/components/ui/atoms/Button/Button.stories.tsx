import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddIcon from '@/assets/icons/18x18/plus.svg';
import React from 'react';

const Button = (props: any) => (
  <button className="flex gap-2.5 btn btn-ghost normal-case text-secondary font-normal hover:bg-secondary hover:bg-opacity-5 p-3">
    <AddIcon className="fill-secondary" />
    Button
  </button>
);

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
