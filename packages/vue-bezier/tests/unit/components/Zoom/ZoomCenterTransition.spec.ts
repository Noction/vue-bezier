import { mount } from '@vue/test-utils'
import ZoomCenterTransition from '../../../../src/components/Zoom/ZoomCenterTransition.vue'

describe('components / Zoom / ZoomCenterTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomCenterTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomCenterTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
