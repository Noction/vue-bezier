import ZoomCenterTransition from '../../../../src/components/Zoom/ZoomCenterTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Zoom / ZoomCenterTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomCenterTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomCenterTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
