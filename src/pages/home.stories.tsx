import { ComponentMeta } from '@storybook/react';

import Home from './index.page';

export default {
  title: 'Pages',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage = () => <Home />;

//
// const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />
//
// export const Default = Template.bind({})
