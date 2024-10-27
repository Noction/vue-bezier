import { mount } from '@vue/test-utils'
import ScaleTransition from '../../../../src/components/Scale/ScaleTransition.vue'

describe('components / Scale / ScaleTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(ScaleTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ScaleTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
