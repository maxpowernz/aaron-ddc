// @ts-ignore
// const path = require('path');
// const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js'); // or your own config file
// require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath);

module.exports = {
  stories: ['../**/**/*.stories.mdx', '../**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    'storybook-addon-designs',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
