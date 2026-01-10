module.exports = {
  extends: [
    'stylelint-config-standard', // configure for CSS
    'stylelint-config-recommended-vue', // add overrides for .Vue files
    'stylelint-config-recess-order', // use the recess order for properties
  ],
  plugins: [
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    'no-empty-source': null,
    'block-no-empty': null,
    'unit-allowed-list': ['px', 'em', 'rem', 's', '%', 'vh', 'vw', 'fr', 'deg', 'cm'],
    'comment-no-empty': true,
    'no-descending-specificity': null,
    'font-weight-notation': 'numeric',
    'comment-empty-line-before': null,
    'comment-whitespace-inside': null,
    'declaration-no-important': null, // Allow !important since we use it for transitions
    'declaration-block-single-line-max-declarations': 1, // Allow single line if 1 declaration
    'selector-pseudo-element-no-unknown': true,
    // Stylistic rules - Block formatting
    '@stylistic/indentation': [2, { baseIndentLevel: 1 }],
    '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    // Stylistic rules - Selectors
    '@stylistic/selector-list-comma-newline-after': 'always',
    // Stylistic rules - Declarations
    '@stylistic/declaration-colon-space-after': 'always',
    '@stylistic/declaration-colon-space-before': 'never',
    // Stylistic rules - Numbers & Units
    '@stylistic/number-leading-zero': 'never',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/unit-case': 'lower',
    // Stylistic rules - Strings
    '@stylistic/string-quotes': 'single',
    // Stylistic rules - Whitespace
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/max-empty-lines': 1,
    // Stylistic rules - Functions & Values
    '@stylistic/function-comma-space-after': 'always',
    '@stylistic/value-list-comma-space-after': 'always',
    // Stylistic rules - Line length
    '@stylistic/max-line-length': 120,
  }
}
