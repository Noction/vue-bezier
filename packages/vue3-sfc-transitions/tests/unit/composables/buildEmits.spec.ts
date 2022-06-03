import { buildEmits } from '../../../src/composable'

describe('composable / buildEmits', () => {
  it('The returned list of emit should match the snapshot',  () => {
    expect(buildEmits()).toMatchSnapshot()
  })
})
