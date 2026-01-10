import { mount } from '@vue/test-utils'
import ScaleTransition from '../../../../../src/components/v2/Scale/ScaleTransition.vue'

describe('components / v2 / Scale / ScaleTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(ScaleTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(ScaleTransition, {
      props: { duration: 500 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(ScaleTransition, {
      props: {
        duration: { enter: 350, leave: 450 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom origin', () => {
    const wrapper = mount(ScaleTransition, {
      props: { origin: 'center center' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(ScaleTransition, {
      props: {
        duration: { enter: 280, leave: 380 },
        delay: { enter: 60, leave: 90 },
        origin: 'bottom right',
      },
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--transition-enter-duration: 280ms')
    expect(style).toContain('--transition-leave-duration: 380ms')
    expect(style).toContain('--transition-enter-delay: 60ms')
    expect(style).toContain('--transition-leave-delay: 90ms')
    expect(style).toContain('--transform-origin: bottom right')
  })
})
