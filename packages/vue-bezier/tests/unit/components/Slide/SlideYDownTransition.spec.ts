import SlideYDownTransition from '../../../../src/components/Slide/SlideYDownTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Slide / SlideYDownTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideYDownTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideYDownTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
