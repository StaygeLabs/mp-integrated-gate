module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./*.js', './*.ts'],
      },
    ],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-empty-pattern': [
          'error',
          { allowObjectPatternsAsParameters: true },
        ],
        'no-nested-ternary': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
