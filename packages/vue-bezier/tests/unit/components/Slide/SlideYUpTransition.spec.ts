import { mount } from '@vue/test-utils'
import SlideYUpTransition from '../../../../src/components/Slide/SlideYUpTransition.vue'

describe('components / Slide / SlideYUpTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideYUpTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideYUpTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
