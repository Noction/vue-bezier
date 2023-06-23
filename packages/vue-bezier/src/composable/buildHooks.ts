import { BaseTransitionProps, RendererElement } from 'vue'

const beforeEnter = (props, el: RendererElement) => {
  const enterDuration = props.duration?.enter ?? props.duration ?? 0
  const enterDelay = props.delay?.enter ?? props.delay ?? 0

  el.style.animationDuration = `${enterDuration}ms`
  el.style.animationDelay = `${enterDelay}ms`

  setStyles(props, el)
}

const beforeLeave = (props, el: RendererElement) => {
  const leaveDuration = props.duration?.leave ?? props.duration ?? 0
  const leaveDelay = props.delay?.leave ?? props.delay ?? 0

  el.style.animationDuration = `${leaveDuration}ms`
  el.style.animationDelay = `${leaveDelay}ms`

  setStyles(props, el)
}

const cleanUpStyles = (props, el: RendererElement) => {
  Object
    .keys(props.styles)
    .forEach(key => {
      const styleValue = props.styles[key]

      if (styleValue) el.style[key] = ''
    })

  el.style.animationDuration = ''
  el.style.animationDelay = ''
}

const leave = (props, el: RendererElement, done: () => void) => {
  setAbsolutePosition(props, el)

  const leaveDuration = props.duration?.leave ?? props.duration ?? 0
  const leaveDelay = props.delay?.leave ?? props.delay ?? 0

  setTimeout(done, leaveDuration + leaveDelay)
}

const setStyles = (props, el: RendererElement) => {
  setTransformOrigin(props, el)

  Object
    .keys(props.styles)
    .forEach(key => {
      const styleValue = props.styles[key]

      if (styleValue) el.style[key] = styleValue
    })
}

const setAbsolutePosition = (props, el: RendererElement) => {
  if (props.group) el.style.position = 'absolute'
}

const setTransformOrigin = (props, el: RendererElement) => {
  if (props.origin) el.style.transformOrigin = props.origin
}

export default (props, emit): BaseTransitionProps => ({
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
  leave,
  setAbsolutePosition,
  setStyles
}
