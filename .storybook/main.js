

const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)"]
};