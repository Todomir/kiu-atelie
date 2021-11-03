const react = require('@vitejs/plugin-react')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      config.optimizeDeps.include = [
        'synchronous-promise',
        'react-is',
        '@base2/pretty-print-object',
        ...config?.optimizeDeps?.include,
      ]
    }
    config.plugins = [
      ...config.plugins,
      require('vite-plugin-eslint').default(),
    ]
    config.resolve = {
      alias: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
    }

    return config
  },
}
