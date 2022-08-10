import FadeTransition from '../../src/components/Fade/FadeTransition.vue'
import { expect } from 'vitest'
import { faker } from '@faker-js/faker'
import { install } from '../../src'
import { createApp, defineComponent } from 'vue'

describe('index', () => {
  it('When installing with default argument, all of the transition component will be registered globally', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    install(appInstance)

    expect(appInstance._context.components).toMatchSnapshot({
      'collapse-transition': expect.any(Object),
      'fade-transition': expect.any(Object),
      'scale-transition': expect.any(Object),
      'slide-x-left-transition': expect.any(Object),
      'slide-x-right-transition': expect.any(Object),
      'slide-y-down-transition': expect.any(Object),
      'slide-y-up-transition': expect.any(Object),
      'zoom-center-transition': expect.any(Object),
      'zoom-up-transition': expect.any(Object),
      'zoom-x-transition': expect.any(Object),
      'zoom-y-transition': expect.any(Object)
    })
  })

  it('When list of components is specified, it should be installed only mentioned', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    install(appInstance, { components: ['FadeTransition'] })

    expect(appInstance._context.components).toStrictEqual({ 'fade-transition': FadeTransition })
  })

  it('When installed flag is `true`, it should not install additional components', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    appInstance.$_v3SFCTransitionsInstalled = true

    install(appInstance)

    expect(appInstance._context.components).toStrictEqual({})
  })
})
