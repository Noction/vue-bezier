import { mount } from '@vue/test-utils'
import ClipPathTransition from '@/components/ClipPath/ClipPathTransition.vue'

describe('components / ClipPath / ClipPathTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(ClipPathTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with circle clip type', () => {
    const wrapper = mount(ClipPathTransition, {
      props: { clipType: 'circle' },
    })
    expect(wrapper.classes()).toContain('noc-clip-circle')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with square clip type', () => {
    const wrapper = mount(ClipPathTransition, {
      props: { clipType: 'square' },
    })
    expect(wrapper.classes()).toContain('noc-clip-square')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(ClipPathTransition, {
      props: { duration: 2000 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(ClipPathTransition, {
      props: {
        duration: { enter: 500, leave: 1000 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(ClipPathTransition, {
      props: {
        duration: { enter: 600, leave: 900 },
        delay: { enter: 100, leave: 200 },
      },
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--noc-transition-enter-duration: 600ms')
    expect(style).toContain('--noc-transition-leave-duration: 900ms')
    expect(style).toContain('--noc-transition-enter-delay: 100ms')
    expect(style).toContain('--noc-transition-leave-delay: 200ms')
  })
})
