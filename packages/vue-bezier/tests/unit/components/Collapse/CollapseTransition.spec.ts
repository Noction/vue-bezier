import { mount } from '@vue/test-utils'
import CollapseTransition from '../../../../src/components/Collapse/CollapseTransition.vue'

describe('components / Collapse / CollapseTransition', () => {
  it('when mounting component with default props, it should work fine', () => {
    const wrapper = mount(CollapseTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('when mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(CollapseTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
