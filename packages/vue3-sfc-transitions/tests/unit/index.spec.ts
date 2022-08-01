import FadeTransition from '../../src/components/Fade/FadeTransition.vue'
import { faker } from '@faker-js/faker'
import { install } from '../../src'
import { createApp, defineComponent } from 'vue'

describe('index', () => {
  it('When installing with default argument, all of the transition component will be registered globally', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    install(appInstance)

    expect(appInstance._context.components).toMatchSnapshot()
  })

  it('When list of components is specified, it should be installed only mentioned', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    install(appInstance, { components: ['FadeTransition'] })

    expect(appInstance._context.components).toMatchObject({ 'fade-transition': FadeTransition })
  })

  it('When installed flag is `true`, it should not install additional components', () => {
    const rootComponent = defineComponent({ name: faker.random.word() })
    const appInstance = createApp(rootComponent)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    appInstance.$_v3SFCTransitionsInstalled = true

    install(appInstance)

    expect(appInstance._context.components).toMatchObject({})
  })
})
