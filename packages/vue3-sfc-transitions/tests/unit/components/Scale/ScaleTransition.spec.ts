import ScaleTransition from '../../../../src/components/Scale/ScaleTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Scale / ScaleTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(ScaleTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ScaleTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
