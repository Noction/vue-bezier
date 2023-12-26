<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    move-class="collapse-move"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { BaseTransitionProps } from 'vue'
import type { Events, Props } from '../../../types'
import { buildComponentType, buildTag } from '../../composable'
import { leave, setAbsolutePosition, setStyles } from '../../composable/buildHooks'

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 300,
  group: false,
  origin: '',
  styles: () => ({
    animationFillMode: 'both',
    animationTimingFunction: 'ease-out'
  }),
  tag: 'span'
})
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)

const hooks: BaseTransitionProps = {
  onAfterEnter (el) {
    // for safari: remove class then reset height is necessary
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow

    emit('after-enter', el)
  },
  onAfterLeave (el) {
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom

    emit('after-leave', el)
  },
  onBeforeEnter (el) {
    const enterDuration = props.duration?.enter ?? props.duration ?? 0

    el.style.transition = transitionStyle(enterDuration)

    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0

    setStyles(props, el)

    emit('before-enter', el)
  },
  onBeforeLeave (el) {
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'

    setStyles(props, el)

    emit('before-leave', el)
  },
  onEnter (el) {
    el.dataset.oldOverflow = el.style.overflow

    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = 'hidden'
  },
  onLeave (el, done: () => void) {
    const leaveDuration = props.duration.leave ?? props.duration ?? 0

    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      el.style.transition = transitionStyle(leaveDuration)
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }

    // necessary for transition-group
    setAbsolutePosition(props, el)

    leave(props, el, done)
    emit('leave', el, done)
  }
}

const transitionStyle = (duration: number) => {
  const durationInSeconds = duration / 1000

  return `${durationInSeconds}s height ease-in-out, ${durationInSeconds}s padding-top ease-in-out, ${durationInSeconds}s padding-bottom ease-in-out`
}

</script>

<style>
  .collapse-move { transition: transform .3s ease-in-out; }
</style>
