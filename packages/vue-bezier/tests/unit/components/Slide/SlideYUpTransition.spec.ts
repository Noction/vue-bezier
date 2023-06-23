import SlideYUpTransition from '../../../../src/components/Slide/SlideYUpTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Slide / SlideYUpTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideYUpTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideYUpTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
