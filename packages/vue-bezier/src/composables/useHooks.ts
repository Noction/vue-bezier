import type { RendererElement } from 'vue'
import type { ComponentProps, NumberOrTimings } from '@/types'

function getTimingValue (timing: NumberOrTimings | undefined, key: 'enter' | 'leave'): number {
  if (typeof timing === 'number') {
    return timing
  }

  if (typeof timing === 'object' && timing !== null) {
    return timing[key] ?? 0
  }

  return 0
}

function camelCaseToKebabCase (str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function beforeEnter (props: ComponentProps, el: RendererElement) {
  const enterDuration = getTimingValue(props.duration, 'enter')
  const enterDelay = getTimingValue(props.delay, 'enter')

  el.style.setProperty('animation-duration', `${enterDuration}ms`)
  el.style.setProperty('animation-delay', `${enterDelay}ms`)

  setStyles(props, el)
}

function beforeLeave (props: ComponentProps, el: RendererElement) {
  const leaveDuration = getTimingValue(props.duration, 'leave')
  const leaveDelay = getTimingValue(props.delay, 'leave')

  el.style.setProperty('animation-duration', `${leaveDuration}ms`)
  el.style.setProperty('animation-delay', `${leaveDelay}ms`)

  setStyles(props, el)
}

function leave (props: ComponentProps, el: RendererElement, done: () => void) {
  setAbsolutePosition(props, el)

  const leaveDuration = getTimingValue(props.duration, 'leave')
  const leaveDelay = getTimingValue(props.delay, 'leave')

  setTimeout(done, leaveDuration + leaveDelay)
}

function cleanUpStyles (props: ComponentProps, el: RendererElement) {
  if (props.styles) {
    Object.entries(props.styles).forEach(([key]) => {
      if (key in el.style) {
        const kebabKey = camelCaseToKebabCase(key)

        el.style.removeProperty(kebabKey)
      }
    })
  }

  el.style.removeProperty('animation-duration')
  el.style.removeProperty('animation-delay')
}

function setStyles (props: ComponentProps, el: RendererElement) {
  setTransformOrigin(props, el)

  if (props.styles) {
    Object.entries(props.styles).forEach(([key, value]) => {
      if (key in el.style) {
        const kebabKey = camelCaseToKebabCase(key)

        el.style.setProperty(kebabKey, value)
      }
    })
  }
}

function setAbsolutePosition (props: ComponentProps, el: RendererElement) {
  if (props.group && el instanceof HTMLElement) {
    const styles = getComputedStyle(el)

    const { width, height, marginLeft, marginTop } = styles

    const parsedWidth = width !== 'auto' ? parseFloat(width) : el.offsetWidth
    const parsedHeight = height !== 'auto' ? parseFloat(height) : el.offsetHeight
    const parsedMarginLeft = parseFloat(marginLeft)
    const parsedMarginTop = parseFloat(marginTop)

    el.style.setProperty('left', `${el.offsetLeft - parsedMarginLeft}px`, 'important')
    el.style.setProperty('top', `${el.offsetTop - parsedMarginTop}px`, 'important')
    el.style.setProperty('width', `${parsedWidth}px`, 'important')
    el.style.setProperty('height', `${parsedHeight}px`, 'important')
    el.style.setProperty('position', 'absolute', 'important')
  }
}

function setTransformOrigin (props: ComponentProps, el: RendererElement) {
  if (props.origin) el.style.setProperty('transform-origin', props.origin)
}

export default (props: ComponentProps, emit: any) => ({
  onAfterEnter: (el: RendererElement) => {
    cleanUpStyles(props, el)
    emit('after-enter', el)
  },
  onAfterLeave: (el: RendererElement) => {
    cleanUpStyles(props, el)
    emit('after-leave', el)
  },
  onBeforeEnter: (el: RendererElement) => {
    beforeEnter(props, el)
    emit('before-enter', el)
  },
  onBeforeLeave: (el: RendererElement) => {
    beforeLeave(props, el)
    emit('before-leave', el)
  },
  onLeave: (el: RendererElement, done: () => void) => {
    leave(props, el, done)
    emit('leave', el, done)
  }
})

export {
  getTimingValue,
  leave,
  setAbsolutePosition,
  setStyles
}
