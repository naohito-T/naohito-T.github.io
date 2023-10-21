/** @type import('stylelint').Configuration */
module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'scss/at-import-partial-extension': 'always',
    'function-url-quotes': 'never',
    'max-nesting-depth': 8,
    'number-max-precision': 10,
    'no-invalid-position-at-import-rule': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    'keyframes-name-pattern': null,
    'rule-empty-line-before': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
    'media-query-no-invalid': null,
    'media-feature-range-notation': 'prefix',
  },
};
