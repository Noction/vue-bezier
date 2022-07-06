import { buildEmits } from '../../../src/composable'

describe('composables / buildEmits', () => {
  it('The returned list of emit should match ',  () => {
    expect(buildEmits()).toMatchSnapshot()
  })
})
