import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from 'pages/index';

export default {
  title: 'Pages',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage = () => <Home />;

//
// const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />
//
// export const Default = Template.bind({})
