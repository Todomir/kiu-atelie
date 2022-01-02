const path = require('path')

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-storysource'],
	webpackFinal: async (config, { configType }) => {
		config.resolve = {
			...(config.resolve || {}),
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				'@/styles': path.resolve(__dirname, '../src', 'styles'),
				'@/hooks': path.resolve(__dirname, '../src', 'hooks'),
				'@/components': path.resolve(__dirname, '../src', 'components'),
				'@/utils': path.resolve(__dirname, '../src', 'utils'),
			},
		}

		// Return the altered config
		return config
	},
}
