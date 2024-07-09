const { mergeConfig } = require('vite');
const { default: EnvironmentPlugin } = require('vite-plugin-environment');
const { default: tsconfigPaths } = require('vite-tsconfig-paths');
const react = require('@vitejs/plugin-react');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-remix-react-router',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // your previous configs and more...
  viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    );

    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        EnvironmentPlugin('all', {
          prefix: 'REACT_APP_',
          defineOn: 'import.meta.env',
        }),
      ],
    });
  },

  docs: {
    autodocs: true,
  },
};
