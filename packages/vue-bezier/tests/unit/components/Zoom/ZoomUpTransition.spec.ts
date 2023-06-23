import ZoomUpTransition from '../../../../src/components/Zoom/ZoomUpTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Zoom / ZoomUpTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(ZoomUpTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(ZoomUpTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
