import { mount } from '@vue/test-utils'
import BlurTransition from '@/components/Blur/BlurTransition.vue'

describe('components / Blur / BlurTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(BlurTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(BlurTransition, {
      props: { duration: 1000 },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(BlurTransition, {
      props: {
        duration: { enter: 300, leave: 600 },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom delay as number', () => {
    const wrapper = mount(BlurTransition, {
      props: { delay: 200 },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom delay as object', () => {
    const wrapper = mount(BlurTransition, {
      props: {
        delay: { enter: 100, leave: 300 },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(BlurTransition, {
      props: {
        duration: { enter: 400, leave: 800 },
        delay: { enter: 50, leave: 100 },
      },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('--noc-transition-enter-duration: 400ms')
    expect(style).toContain('--noc-transition-leave-duration: 800ms')
    expect(style).toContain('--noc-transition-enter-delay: 50ms')
    expect(style).toContain('--noc-transition-leave-delay: 100ms')
  })
})
