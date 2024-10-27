import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  ignores: ['dist/', '**/dist/**/', 'tests/unit/coverage/', 'tests/unit/coverage/**/', 'tests/lcov-report/', 'tests/lcov-report/**/', '*rc.js', '**/*rc.js/**'],
})
