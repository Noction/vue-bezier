import FadeTransition from '../../../../src/components/Fade/FadeTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Fade / FadeTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(FadeTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(FadeTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
