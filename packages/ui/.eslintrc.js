module.exports = {
	root: true,
	extends: ['todomir'],
	ignorePatterns: '**/*.js',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
}
