<script setup lang="ts">
import type { ComponentProps } from '@/types'
import { computed } from 'vue'

const { duration = 300, delay = 0, tag = 'span' } = defineProps<ComponentProps>()

const transitionDuration = computed(() => {
  if (typeof duration === 'number') {
    return {
      enter: `${duration}ms`,
      leave: `${duration}ms`,
    }
  }
  else {
    return {
      enter: `${duration.enter}ms`,
      leave: `${duration.leave}ms`,
    }
  }
})

const transitionDelay = computed(() => {
  if (typeof delay === 'number') {
    return {
      enter: `${delay}ms`,
      leave: `${delay}ms`,
    }
  }
  else {
    return {
      enter: `${delay.enter}ms`,
      leave: `${delay.leave}ms`,
    }
  }
})

function initLeaving(element: HTMLElement) {
  const styles = getComputedStyle(element)
  const { width, height } = styles
  const { marginLeft, marginTop } = styles

  element.style.setProperty('left', `${element.offsetLeft - Number.parseFloat(marginLeft)}px`, 'important')
  element.style.setProperty('top', `${element.offsetTop - Number.parseFloat(marginTop)}px`, 'important')
  element.style.setProperty('width', `${Number.parseFloat(width)}px`, 'important')
  element.style.setProperty('height', `${Number.parseFloat(height)}px`, 'important')
}

function reduceTransition(element: HTMLElement) {
  element.style.setProperty('transition-duration', '0ms', 'important')
  element.style.setProperty('transition-delay', '0ms', 'important')
}

function resetTransition(element: HTMLElement) {
  element.style.removeProperty('transition-duration')
  element.style.removeProperty('transition-timing-function')
  element.style.removeProperty('transition-delay')
}

function setupTransition(element: HTMLElement, event: 'enter' | 'leave' = 'enter') {
  const duration = transitionDuration.value[event]
  const delay = transitionDelay.value[event]

  element.style.setProperty('transition-duration', duration, 'important')
  element.style.setProperty('transition-delay', delay, 'important')
}

function afterLeave(el: Element) {
  const element = el as HTMLElement
  resetTransition(element)
  element.style.removeProperty('opacity')
}

function beforeLeave(el: Element) {
  const element = el as HTMLElement
  reduceTransition(element)
  initLeaving(element)
}

function onLeave(el: Element) {
  const element = el as HTMLElement
  setupTransition(element, 'leave')
  element.style.setProperty('opacity', '0', 'important')
}
</script>

<template>
  <TransitionGroup
    :tag
    class="dissolve-list"
    enter-active-class="dissolve-enter-active"
    enter-from-class="dissolve-enter-from"
    enter-to-class="dissolve-enter-to"
    leave-active-class="dissolve-leave-active"
    leave-from-class="dissolve-leave-from"
    leave-to-class="dissolve-leave-to"
    move-class="dissolve-move"
    :style="{
      '--transition-enter-duration': transitionDuration.enter,
      '--transition-leave-duration': transitionDuration.leave,
      '--transition-enter-delay': transitionDelay.enter,
      '--transition-leave-delay': transitionDelay.leave,
    }"
    @after-leave="afterLeave($event)"
    @before-leave="beforeLeave($event)"
    @leave="onLeave($event)"
  >
    <slot />
  </TransitionGroup>
</template>

<style>
  @property --transition-enter-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .3s;
  }

  @property --transition-leave-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .3s;
  }

  @property --transition-enter-delay {
    syntax: '<time>';
    inherits: false;
    initial-value: 0s;
  }

  @property --transition-leave-delay {
    syntax: '<time>';
    inherits: false;
    initial-value: 0s;
  }

  .dissolve-list > * {
    --transition-enter-duration: inherit;
    --transition-leave-duration: inherit;
    --transition-enter-delay: inherit;
    --transition-leave-delay: inherit;
  }

  .dissolve-enter-active {
    transition: opacity var(--transition-enter-duration) ease var(--transition-enter-delay);
    will-change: opacity;
  }

  .dissolve-leave-active {
    position: absolute;
    backface-visibility: hidden;
    transition: opacity var(--transition-leave-duration) ease var(--transition-leave-delay);
    will-change: opacity;
  }

  .dissolve-enter-from,
  .dissolve-leave-to {
    opacity: 0;
  }

  .dissolve-enter-to,
  .dissolve-leave-from {
    opacity: 1;
  }

  .dissolve-move {
    transition: transform var(--transition-enter-duration) ease-out var(--transition-enter-delay);
  }
</style>
