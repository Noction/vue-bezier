import { mount } from '@vue/test-utils'
import { h } from 'vue'
import ScaleListTransition from '@/components/Scale/ScaleListTransition.vue'

describe('components / Scale / ScaleListTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(ScaleListTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom tag', () => {
    const wrapper = mount(ScaleListTransition, {
      props: { tag: 'div' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with default tag as span', () => {
    const wrapper = mount(ScaleListTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(ScaleListTransition, {
      props: { duration: 600 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(ScaleListTransition, {
      props: {
        duration: { enter: 250, leave: 350 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(ScaleListTransition, {
      props: {
        duration: { enter: 320, leave: 480 },
        delay: { enter: 70, leave: 140 },
      },
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--transition-enter-duration: 320ms')
    expect(style).toContain('--transition-leave-duration: 480ms')
    expect(style).toContain('--transition-enter-delay: 70ms')
    expect(style).toContain('--transition-leave-delay: 140ms')
  })

  it('should handle lifecycle hooks', () => {
    const wrapper = mount(ScaleListTransition, {
      slots: {
        default: () => [h('div', { key: 1 }, 'Item 1')],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
