// 'plugin:@typescript-eslint/recommended',
// 'plugin:@typescript-eslint/recommended-requiring-type-checking',

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'prettier/prettier': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true },
    ],
    'import/prefer-default-export': ['off'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
