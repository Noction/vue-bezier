import SlideXLeftTransition from '../../../../src/components/Slide/SlideXLeftTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Slide / SlideXLeftTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(SlideXLeftTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(SlideXLeftTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
