module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', 'd.ts', '.ts', '.tsx'],
        paths: ['src', 'src/styles'],
      },
    },
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'next',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:security/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/typescript',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: [
        'react',
        '@typescript-eslint',
        'unicorn',
        'simple-import-sort',
        'prettier',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.ts', '.tsx'],
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-console': 'warn',
        'no-underscore-dangle': 'off',
        'unicorn/filename-case': 'off',
        'simple-import-sort/imports': 'error',
        'import/extensions': 'off',
        'react/button-has-type': 'off',
      },
    },
  ],
}
