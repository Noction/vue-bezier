import ZoomYTransition from '../../../../src/components/Zoom/ZoomYTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Zoom / ZoomYTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomYTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomYTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
