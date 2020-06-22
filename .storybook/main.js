const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => ({
    ...config,
    plugins: [...config.plugins],
    module: {
      ...config.module,
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: [/[/\\\\]node_modules[/\\\\]/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                configFile: path.resolve(
                  __dirname,
                  '..',
                  'babel.config.js'
                ),
                cacheDirectory: true,
                compact: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx'],
    },
  }),
};
