import { mount } from '@vue/test-utils'
import DissolveTransition from '@/components/Dissolve/DissolveTransition.vue'

describe('components / Dissolve / DissolveTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(DissolveTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(DissolveTransition, {
      props: { duration: 500 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(DissolveTransition, {
      props: {
        duration: { enter: 200, leave: 400 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom delay as number', () => {
    const wrapper = mount(DissolveTransition, {
      props: { delay: 150 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom delay as object', () => {
    const wrapper = mount(DissolveTransition, {
      props: {
        delay: { enter: 50, leave: 200 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(DissolveTransition, {
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
