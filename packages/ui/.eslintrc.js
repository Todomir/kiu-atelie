module.exports = {
	root: true,
	extends: ['todomir-react'],
	ignorePatterns: '**/*.js',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
}
