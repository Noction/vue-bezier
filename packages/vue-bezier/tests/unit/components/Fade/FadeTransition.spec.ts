import { mount } from '@vue/test-utils'
import FadeTransition from '../../../../src/components/Fade/FadeTransition.vue'

describe('components / Fade / FadeTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(FadeTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(FadeTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
