/**
 * @todo
 * - jest関連のformat
 * - orderするやつ
 */

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ['eslint-config-airbnb-typescript', 'next', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        pathGroups: [
          {
            pattern: '{next**,next/**,react**,react/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '~/styles/**',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        distinctGroup: false,
        'newlines-between': 'never',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/sort-type-constituents': 'error',
  },
};
