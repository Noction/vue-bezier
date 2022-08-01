import { BaseTransitionProps } from 'vue'

const beforeEnter = (props, el: HTMLElement) => {
  const enterDuration = props.duration?.enter ?? props.duration ?? 0
  const enterDelay = props.delay?.enter ?? props.delay ?? 0

  el.style.animationDuration = `${enterDuration}ms`
  el.style.animationDelay = `${enterDelay}ms`

  setStyles(props, el)
}

const beforeLeave = (props, el: HTMLElement) => {
  const leaveDuration = props.duration?.leave ?? props.duration ?? 0
  const leaveDelay = props.delay?.leave ?? props.delay ?? 0

  el.style.animationDuration = `${leaveDuration}ms`
  el.style.animationDelay = `${leaveDelay}ms`

  setStyles(props, el)
}

const cleanUpStyles = (props, el: HTMLElement) => {
  Object
    .keys(props.styles)
    .forEach(key => {
      const styleValue = props.styles[key]

      if (styleValue) el.style[key] = ''
    })

  el.style.animationDuration = ''
  el.style.animationDelay = ''
}

const leave = (props, el: HTMLElement, done: () => void) => {
  setAbsolutePosition(props, el)

  const leaveDuration = props.duration?.leave ?? props.duration ?? 0
  const leaveDelay = props.delay?.leave ?? props.delay ?? 0

  setTimeout(done, leaveDuration + leaveDelay)
}

const setStyles = (props, el: HTMLElement) => {
  setTransformOrigin(props, el)

  Object
    .keys(props.styles)
    .forEach(key => {
      const styleValue = props.styles[key]

      if (styleValue) el.style[key] = styleValue
    })
}

const setAbsolutePosition = (props, el: HTMLElement) => {
  if (props.group) el.style.position = 'absolute'
}

const setTransformOrigin = (props, el: HTMLElement) => {
  if (props.origin) el.style.transformOrigin = props.origin
}

export default (props, emit): BaseTransitionProps => ({
  onAfterEnter: (el: HTMLElement) => {
    cleanUpStyles(props, el)
    emit('after-enter', el)
  },
  onAfterLeave: (el: HTMLElement) => {
    cleanUpStyles(props, el)
    emit('after-leave', el)
  },
  onBeforeEnter: (el: HTMLElement) => {
    beforeEnter(props, el)
    emit('before-enter', el)
  },
  onBeforeLeave: (el: HTMLElement) => {
    beforeLeave(props, el)
    emit('before-leave', el)
  },
  onLeave: (el: HTMLElement, done: () => void) => {
    leave(props, el, done)
    emit('leave', el, done)
  }
})

export {
  setAbsolutePosition,
  setStyles
}
