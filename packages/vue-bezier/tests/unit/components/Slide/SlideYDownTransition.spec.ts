import { mount } from '@vue/test-utils'
import SlideYDownTransition from '../../../../src/components/Slide/SlideYDownTransition.vue'

describe('components / Slide / SlideYDownTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideYDownTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideYDownTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
