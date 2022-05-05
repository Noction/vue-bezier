export default (props, emit) => ({
  afterEnter: (el: HTMLElement) => {
    cleanUpStyles(props, el)
    emit('after-enter', el)
  },
  afterLeave: (el: HTMLElement) => {
    cleanUpStyles(props, el)
    emit('after-leave', el)
  },
  beforeEnter: (el: HTMLElement) => {
    beforeEnter(props, el)
    emit('before-enter', el)
  },
  beforeLeave: (el: HTMLElement) => {
    beforeLeave(props, el)
    emit('before-leave', el)
  },
  leave: (el: HTMLElement, done: Function) => {
    leave(props, el, done)
    emit('leave', el, done)
  }
})

function beforeEnter(props, el: HTMLElement) {
  const enterDuration = props.duration.enter
    ? props.duration.enter
    : props.duration

  el.style.animationDuration = `${enterDuration}ms`

  const enterDelay = props.delay.enter ? props.delay.enter : props.delay

  el.style.animationDelay = `${enterDelay}ms`

  setStyles(props, el)
}

function cleanUpStyles(props, el: HTMLElement) {
  Object.keys(props.styles).forEach((key) => {
    const styleValue = props.styles[key]

    if (styleValue) el.style[key] = ''
  })
  el.style.animationDuration = ''
  el.style.animationDelay = ''
}

function beforeLeave(props, el: HTMLElement) {
  const leaveDuration = props.duration.leave
    ? props.duration.leave
    : props.duration

  el.style.animationDuration = `${leaveDuration}ms`

  const leaveDelay = props.delay.leave ? props.delay.leave : props.delay

  el.style.animationDelay = `${leaveDelay}ms`

  setStyles(props, el)
}

function leave(props, el: HTMLElement, done: Function) {
  setAbsolutePosition(props, el)
  setTimeout(done, props.duration)
}

function setStyles(props, el: HTMLElement) {
  setTransformOrigin(props, el)
  Object.keys(props.styles).forEach((key) => {
    const styleValue = props.styles[key]

    if (styleValue) el.style[key] = styleValue
  })
}

function setAbsolutePosition(props, el: HTMLElement) {
  if (props.group) el.style.position = 'absolute'
}

function setTransformOrigin(props, el: HTMLElement) {
  if (props.origin) el.style.transformOrigin = props.origin
}

export {
  beforeEnter,
  beforeLeave,
  cleanUpStyles,
  leave,
  setAbsolutePosition,
  setStyles,
  setTransformOrigin
}
