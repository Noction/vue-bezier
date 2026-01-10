import { mount } from '@vue/test-utils'
import { h } from 'vue'
import DissolveListTransition from '../../../../../src/components/v2/Dissolve/DissolveListTransition.vue'

describe('components / v2 / Dissolve / DissolveListTransition', () => {
  it('should render with default props', () => {
    const wrapper = mount(DissolveListTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom tag', () => {
    const wrapper = mount(DissolveListTransition, {
      props: { tag: 'div' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with default tag as span', () => {
    const wrapper = mount(DissolveListTransition)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as number', () => {
    const wrapper = mount(DissolveListTransition, {
      props: { duration: 600 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render with custom duration as object', () => {
    const wrapper = mount(DissolveListTransition, {
      props: {
        duration: { enter: 250, leave: 350 },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should apply correct CSS variables', () => {
    const wrapper = mount(DissolveListTransition, {
      props: {
        duration: { enter: 400, leave: 500 },
        delay: { enter: 80, leave: 160 },
      },
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--transition-enter-duration: 400ms')
    expect(style).toContain('--transition-leave-duration: 500ms')
    expect(style).toContain('--transition-enter-delay: 80ms')
    expect(style).toContain('--transition-leave-delay: 160ms')
  })

  it('should handle lifecycle hooks', () => {
    const wrapper = mount(DissolveListTransition, {
      slots: {
        default: () => [h('div', { key: 1 }, 'Item 1')],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
