import { mount } from '@vue/test-utils'
import SlideXLeftTransition from '../../../../src/components/Slide/SlideXLeftTransition.vue'

describe('components / Slide / SlideXLeftTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideXLeftTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideXLeftTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
