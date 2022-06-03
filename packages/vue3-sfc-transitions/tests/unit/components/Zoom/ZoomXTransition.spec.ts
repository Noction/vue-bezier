import ZoomXTransition from '../../../../src/components/Zoom/ZoomXTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Zoom / ZoomXTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomXTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomXTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
