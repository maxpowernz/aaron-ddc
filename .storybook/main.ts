// @ts-nocheck
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next',
    'storybook-addon-pseudo-states',
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
  // @ts-ignore
  webpackFinal: async (config) => {
    // @ts-ignore
    const imageRule = config.module.rules.find((rule) => rule?.test?.test('.svg'));
    imageRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
