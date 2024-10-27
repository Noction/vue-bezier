import { mount } from '@vue/test-utils'
import ZoomXTransition from '../../../../src/components/Zoom/ZoomXTransition.vue'

describe('components / Zoom / ZoomXTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomXTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomXTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
