<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-collapse"
    v-bind="{ ...$attrs, ...hooks }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { BaseTransitionProps } from 'vue'
import { buildComponentType } from '../../composables'
import type { ComponentEvents, ComponentProps } from '@/types'
import { getTimingValue, leave, setAbsolutePosition, setStyles } from '@/composables/useHooks'

const props = withDefaults(defineProps<ComponentProps>(), {
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

const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)

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
    const enterDuration = getTimingValue(props.duration, 'enter')

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
    const leaveDuration = getTimingValue(props.duration, 'leave')

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
  .noc-collapse-move { transition: transform .3s ease-in-out; }
</style>
