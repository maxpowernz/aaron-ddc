import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddIcon from '@/assets/icons/18x18/plus.svg';
import React from 'react';
import { Button } from 'react-daisyui';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button color="primary">asfdsadfds f</Button>
      <Button color="secondary" className="text-text-secondary">
        asfdsadfds
      </Button>
      {/* <button className="btn btn-secondary">asfdsadfds f</button> */}
      <Button color="error">asfdsadfds f</Button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
