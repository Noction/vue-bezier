import CollapseTransition from '../../../../src/components/Collapse/CollapseTransition.vue'
import { mount } from '@vue/test-utils'

describe('components / Collapse / CollapseTransition', () => {
  it('When mounting component with default props, it should work fine', () => {
    const wrapper = mount(CollapseTransition)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When mounting component with group enabled prop, it should work fine', () => {
    const wrapper = mount(CollapseTransition, { props: { group: true } })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
