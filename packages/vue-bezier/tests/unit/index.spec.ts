import { expect } from 'vitest'
import { faker } from '@faker-js/faker'
import { install } from '../../src'
import { createApp, defineComponent } from 'vue'

describe('index', () => {
  it('When installing with default argument, all of the transition component will be registered globally', () => {
    const rootComponent = defineComponent({ name: faker.lorem.word() })
    const appInstance = createApp(rootComponent)

    install(appInstance)

    expect(appInstance._context.components).toMatchSnapshot({
      CollapseTransition: expect.any(Object),
      FadeTransition: expect.any(Object),
      ScaleTransition: expect.any(Object),
      SlideXLeftTransition: expect.any(Object),
      SlideXRightTransition: expect.any(Object),
      SlideYDownTransition: expect.any(Object),
      SlideYUpTransition: expect.any(Object),
      ZoomCenterTransition: expect.any(Object),
      ZoomUpTransition: expect.any(Object),
      ZoomXTransition: expect.any(Object),
      ZoomYTransition: expect.any(Object)
    })
  })

  it('When installed flag is `true`, it should not install additional components', () => {
    const rootComponent = defineComponent({ name: faker.lorem.word() })
    const appInstance = createApp(rootComponent)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    appInstance.$_v3SFCTransitionsInstalled = true

    install(appInstance)

    expect(appInstance._context.components).toStrictEqual({})
  })
})
