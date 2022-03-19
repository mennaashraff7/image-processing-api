module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    
    'prettier/prettier': 0, 
    'no-console': 0,
    '@typescript-eslint/no-var-requires': 0,
     'eslint-disable-next-line no-empty':0,
     '@typescript-eslint/ban-types':0
  },
}
