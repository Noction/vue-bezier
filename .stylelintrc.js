module.exports = {
  extends: [
    'stylelint-config-standard-scss', // configure for SCSS
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
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-no-important': null, // Allow !important since we use it for transitions
    'declaration-block-single-line-max-declarations': 1,
    'selector-pseudo-element-no-unknown': true,
    // Stylistic rules
    '@stylistic/indentation': [2, { baseIndentLevel: 1 }],
    '@stylistic/number-leading-zero': 'never',
  }
}
