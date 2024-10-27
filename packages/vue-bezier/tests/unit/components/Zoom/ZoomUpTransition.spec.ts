import { mount } from '@vue/test-utils'
import ZoomUpTransition from '../../../../src/components/Zoom/ZoomUpTransition.vue'

describe('components / Zoom / ZoomUpTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomUpTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomUpTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
