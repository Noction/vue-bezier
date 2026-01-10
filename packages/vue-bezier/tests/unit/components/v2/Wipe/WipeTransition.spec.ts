import { mount } from '@vue/test-utils'
import WipeTransition from '../../../../../src/components/v2/Wipe/WipeTransition.vue'

describe('components / v2 / Wipe / WipeTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(WipeTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(WipeTransition, {
      props: { duration: 500 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(WipeTransition, {
      props: {
        duration: { enter: 300, leave: 400 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(WipeTransition, {
      props: {
        duration: { enter: 350, leave: 450 },
        delay: { enter: 75, leave: 125 },
      },
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--transition-enter-duration: 350ms')
    expect(style).toContain('--transition-leave-duration: 450ms')
    expect(style).toContain('--transition-enter-delay: 75ms')
    expect(style).toContain('--transition-leave-delay: 125ms')
  })
})
