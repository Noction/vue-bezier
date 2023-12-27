import { buildComponentType } from '../../../src/composables'
import { Transition, TransitionGroup } from 'vue'

describe('composables / buildComponentType', () => {
  it('When passing `group` true prop, it should return `TransitionGroup` component', () => {
    const props = { group: true }
    const expectedComponentName = TransitionGroup.name
    const result = buildComponentType(props)

    expect(result.name).toStrictEqual(expectedComponentName)
  })

  it('When passing `group` false prop, it should return `Transition` component', () => {
    const props = { group: false }
    const expectedComponentName = Transition.name
    const result = buildComponentType(props)

    expect(result.name).toStrictEqual(expectedComponentName)
  })
})
