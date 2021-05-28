module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/no-unescaped-entities': 0,
    '@typescript-eslint/no-unused-vars': [2, { 'argsIgnorePattern': '^_' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'no-empty-pattern': ['off'],
    'no-undef': ['error'],
    'no-var': ['error'],
    'no-console': [2, { 'allow': ['warn', 'error'] }],
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  },
  'overrides': [
    {
      'files': ['src/**/*.ts', 'src/**/*.tsx'],
      'excludedFiles': ['next-env.d.ts']
    }
  ]
};
