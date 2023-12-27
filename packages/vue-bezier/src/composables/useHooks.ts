import type { BaseTransitionProps, RendererElement } from 'vue'
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

function beforeEnter (props: ComponentProps, el: RendererElement) {
  const enterDuration = getTimingValue(props.duration, 'enter')
  const enterDelay = getTimingValue(props.delay, 'enter')

  el.style.animationDuration = `${enterDuration}ms`
  el.style.animationDelay = `${enterDelay}ms`

  setStyles(props, el)
}

function beforeLeave (props: ComponentProps, el: RendererElement) {
  const leaveDuration = getTimingValue(props.duration, 'leave')
  const leaveDelay = getTimingValue(props.delay, 'leave')

  el.style.animationDuration = `${leaveDuration}ms`
  el.style.animationDelay = `${leaveDelay}ms`

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
    Object
      .entries(props.styles)
      .forEach(([key]) => {
        if (key in el.style) {
          el.style[key] = ''
        }
      })
  }

  el.style.animationDuration = ''
  el.style.animationDelay = ''
}

function setStyles (props: ComponentProps, el: RendererElement)  {
  setTransformOrigin(props, el)

  if (props.styles) {
    Object
      .entries(props.styles)
      .forEach(([key, value]) => {
        if (key in el.style) {
          el.style[key] = value
        }
      })
  }
}

function setAbsolutePosition  (props: ComponentProps, el: RendererElement)  {
  if (props.group) el.style.position = 'absolute'
}

function setTransformOrigin (props: ComponentProps, el: RendererElement)  {
  if (props.origin) el.style.transformOrigin = props.origin
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
