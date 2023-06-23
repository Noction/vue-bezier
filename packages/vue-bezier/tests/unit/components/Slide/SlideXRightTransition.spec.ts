import SlideXRightTransition from '../../../../src/components/Slide/SlideXRightTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Slide / SlideXRightTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideXRightTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideXRightTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
