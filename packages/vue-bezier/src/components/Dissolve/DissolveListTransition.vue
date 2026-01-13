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
    class="noc-dissolve-list"
    enter-active-class="noc-dissolve-enter-active"
    enter-from-class="noc-dissolve-enter-from"
    enter-to-class="noc-dissolve-enter-to"
    leave-active-class="noc-dissolve-leave-active"
    leave-from-class="noc-dissolve-leave-from"
    leave-to-class="noc-dissolve-leave-to"
    move-class="noc-dissolve-move"
    :style="{
      '--noc-transition-enter-duration': transitionDuration.enter,
      '--noc-transition-leave-duration': transitionDuration.leave,
      '--noc-transition-enter-delay': transitionDelay.enter,
      '--noc-transition-leave-delay': transitionDelay.leave,
    }"
    @after-leave="afterLeave($event)"
    @before-leave="beforeLeave($event)"
    @leave="onLeave($event)"
  >
    <slot />
  </TransitionGroup>
</template>

<style>
  @property --noc-transition-enter-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .3s;
  }

  @property --noc-transition-leave-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .3s;
  }

  @property --noc-transition-enter-delay {
    syntax: '<time>';
    inherits: false;
    initial-value: 0s;
  }

  @property --noc-transition-leave-delay {
    syntax: '<time>';
    inherits: false;
    initial-value: 0s;
  }

  .noc-dissolve-list > * {
    --noc-transition-enter-duration: inherit;
    --noc-transition-leave-duration: inherit;
    --noc-transition-enter-delay: inherit;
    --noc-transition-leave-delay: inherit;
  }

  .noc-dissolve-enter-active {
    transition: opacity var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
    will-change: opacity;
  }

  .noc-dissolve-leave-active {
    position: absolute;
    backface-visibility: hidden;
    transition: opacity var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
    will-change: opacity;
  }

  .noc-dissolve-enter-from,
  .noc-dissolve-leave-to {
    opacity: 0;
  }

  .noc-dissolve-enter-to,
  .noc-dissolve-leave-from {
    opacity: 1;
  }

  .noc-dissolve-move {
    transition: transform var(--noc-transition-enter-duration) ease-out var(--noc-transition-enter-delay);
  }
</style>
