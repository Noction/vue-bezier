import { faker } from '@faker-js/faker'
import { useHooks } from '../../../src/composables'

describe('composables / useHooks', () => {
  describe('onAfterEnter', () => {
    afterEach(() => { vi.restoreAllMocks() })

    it('When calling `onAfterEnter`, it should call `emit` function with 2 arguments: `after-enter` and `el`', () => {
      const props = { styles: {} }
      const emitterFn = vi.fn()
      const eventName = 'after-enter'
      const refElement = document.createElement('span')

      useHooks(props, emitterFn).onAfterEnter(refElement)

      expect(emitterFn).toHaveBeenCalledWith(eventName, refElement)
    })

    it('When calling `onAfterEnter`, it should reset all set styles on element', () => {
      const color = faker.color.rgb({ format: 'css' })
      const props = { styles: { color } }
      const emitterFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', `color: ${color}`)
      expectedElement.setAttribute('style', '')
      useHooks(props, emitterFn).onAfterEnter(refElement)

      expect(refElement).toStrictEqual(expectedElement)
    })
  })

  describe('onAfterLeave', () => {
    afterEach(() => { vi.restoreAllMocks() })

    it('When calling `onAfterLeave`, it should call `emit` function with 2 arguments: `after-leave` and `el`', () => {
      const props = { styles: {} }
      const emitterFn = vi.fn()
      const eventName = 'after-leave'
      const refElement = document.createElement('span')

      useHooks(props, emitterFn).onAfterLeave(refElement)

      expect(emitterFn).toHaveBeenCalledWith(eventName, refElement)
    })

    it('When calling `onAfterLeave`, it should reset all set styles on element', () => {
      const color = faker.color.rgb({ format: 'css' })
      const props = { styles: { color } }
      const emitterFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', `color: ${color}`)
      expectedElement.setAttribute('style', '')
      useHooks(props, emitterFn).onAfterEnter(refElement)

      expect(refElement).toStrictEqual(expectedElement)
    })
  })

  describe('onBeforeEnter', () => {
    afterEach(() => { vi.restoreAllMocks() })

    it('When calling `onBeforeEnter`, it should call `emit` function with 2 arguments: `before-enter` and `el`', () => {
      const props = { styles: {} }
      const emitterFn = vi.fn()
      const eventName = 'before-enter'
      const refElement = document.createElement('span')

      useHooks(props, emitterFn).onBeforeEnter(refElement)

      expect(emitterFn).toHaveBeenCalledWith(eventName, refElement)
    })

    it('When calling `onBeforeEnter`, it should set `animationDuration` and `animationDelay` styles on element', () => {
      const color = faker.color.rgb({ format: 'css' })
      const delay = +faker.string.numeric()
      const duration = +faker.string.numeric()
      const props = { delay, duration, styles: { color } }
      const emitterFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', '')
      expectedElement.style.animationDuration = `${duration}ms`
      expectedElement.style.animationDelay = `${delay}ms`
      expectedElement.style.color = color
      useHooks(props, emitterFn).onBeforeEnter(refElement)

      expect(refElement).toStrictEqual(expectedElement)
    })
  })

  describe('onBeforeLeave', () => {
    afterEach(() => { vi.restoreAllMocks() })

    it('When calling `beforeLeave`, it should call `emit` function with 2 arguments: `before-leave` and `el`', () => {
      const props = { styles: {} }
      const emitterFn = vi.fn()
      const eventName = 'before-leave'
      const refElement = document.createElement('span')

      useHooks(props, emitterFn).onBeforeLeave(refElement)

      expect(emitterFn).toHaveBeenCalledWith(eventName, refElement)
    })

    it('When calling `beforeLeave`, it should set `animationDuration` and `animationDelay` styles on element', () => {
      const color = faker.color.rgb({ format: 'css' })
      const delay = +faker.string.numeric()
      const duration = +faker.string.numeric()
      const props = { delay, duration, styles: { color } }
      const emitterFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', '')
      expectedElement.style.animationDuration = `${duration}ms`
      expectedElement.style.animationDelay = `${delay}ms`
      expectedElement.style.color = color
      useHooks(props, emitterFn).onBeforeLeave(refElement)

      expect(refElement).toStrictEqual(expectedElement)
    })
  })

  describe('onLeave', () => {
    beforeEach(() => { vi.useFakeTimers() })
    afterEach(() => { vi.restoreAllMocks() })

    it('When calling `onLeave`, it should call `emit` function with 2 arguments: `leave`, `el` and `done` function', () => {
      const props = { styles: {} }
      const emitterFn = vi.fn()
      const doneFn = vi.fn()
      const eventName = 'leave'
      const refElement = document.createElement('span')

      useHooks(props, emitterFn).onLeave(refElement, doneFn)

      expect(emitterFn).toHaveBeenCalledWith(eventName, refElement, doneFn)
    })

    it('When calling `onLeave`, it should not change styles of element', () => {
      const color = faker.color.rgb({ format: 'css' })
      const props = { styles: { color } }
      const emitterFn = vi.fn()
      const doneFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', '')
      expectedElement.setAttribute('style', '')
      useHooks(props, emitterFn).onLeave(refElement, doneFn)

      expect(refElement).toStrictEqual(expectedElement)
    })

    it('When calling `onLeave`, it should call `done` function after delay and duration sum', () => {
      const color = faker.color.rgb({ format: 'css' })
      const delay = +faker.string.numeric()
      const duration = +faker.string.numeric()
      const props = { delay, duration, styles: { color } }
      const emitterFn = vi.fn()
      const doneFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', '')
      expectedElement.setAttribute('style', '')
      useHooks(props, emitterFn).onLeave(refElement, doneFn)

      expect(doneFn).toBeCalledTimes(0)
      vi.advanceTimersByTime(delay + duration)
      expect(doneFn).toBeCalledTimes(1)
    })

    it('When calling `onLeave` with `group` prop to `true`, it should add `style` with `position: absolute` ', () => {
      const color = faker.color.rgb({ format: 'css' })
      const props = { group: true, styles: { color } }
      const emitterFn = vi.fn()
      const doneFn = vi.fn()
      const refElement = document.createElement('span')
      const expectedElement = document.createElement('span')

      refElement.setAttribute('style', '')
      expectedElement.setAttribute('style', 'position: absolute;')
      useHooks(props, emitterFn).onLeave(refElement, doneFn)

      expect(refElement).toStrictEqual(expectedElement)
    })
  })
})
