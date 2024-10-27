import { mount } from '@vue/test-utils'
import SlideXRightTransition from '../../../../src/components/Slide/SlideXRightTransition.vue'

describe('components / Slide / SlideXRightTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideXRightTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideXRightTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
