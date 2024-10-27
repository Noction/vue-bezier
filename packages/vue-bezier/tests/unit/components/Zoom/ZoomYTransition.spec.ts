import { mount } from '@vue/test-utils'
import ZoomYTransition from '../../../../src/components/Zoom/ZoomYTransition.vue'

describe('components / Zoom / ZoomYTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomYTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomYTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
