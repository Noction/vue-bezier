import { buildComponentType } from '../../../src/composable'
import { Transition, TransitionGroup } from 'vue'

describe('composable / buildComponentType', () => {
  it('When passing `group` true prop, it should return `TransitionGroup` component', () => {
    // Arrange
    const props = { group: true }
    const expectedComponentName = TransitionGroup.name

    // Act
    const result = buildComponentType(props)

    // Assert
    expect(result.name).toStrictEqual(expectedComponentName)
  })

  it('When passing `group` false prop, it should return `Transition` component', () => {
    // Arrange
    const props = { group: false }
    const expectedComponentName = Transition.name

    // Act
    const result = buildComponentType(props)

    // Assert
    expect(result.name).toStrictEqual(expectedComponentName)
  })
})
