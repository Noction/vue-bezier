<script setup lang="ts">
import type { ComponentProps } from '@/types'
import { computed } from 'vue'

const { duration = 300, delay = 0, direction = 'right' } = defineProps<ComponentProps & { direction?: 'left' | 'right' | 'up' | 'down' }>()

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

const pushDirectionClass = computed(() => {
  return `push-${direction}`
})
</script>

<template>
  <Transition
    :class="[pushDirectionClass]"
    enter-active-class="push-enter-active"
    enter-from-class="push-enter-from"
    enter-to-class="push-enter-to"
    leave-active-class="push-leave-active"
    leave-from-class="push-leave-from"
    leave-to-class="push-leave-to"
    :style="{
      '--transition-enter-duration': transitionDuration.enter,
      '--transition-leave-duration': transitionDuration.leave,
      '--transition-enter-delay': transitionDelay.enter,
      '--transition-leave-delay': transitionDelay.leave,
    }"
  >
    <slot />
  </Transition>
</template>

<style scoped>
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

  .push-enter-active,
  .push-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--transition-enter-duration) ease var(--transition-enter-delay), transform var(--transition-enter-duration) ease var(--transition-enter-delay);
    will-change: opacity, transform;
  }

  .push-leave-active {
    backface-visibility: hidden;
    transition: opacity var(--transition-leave-duration) ease var(--transition-leave-delay), transform var(--transition-leave-duration) ease var(--transition-leave-delay);
  }

  .push-enter-to,
  .push-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  /* Left */
  .push-left.push-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .push-left.push-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  /* Right */
  .push-right.push-enter-from {
    opacity: 0;
    transform: translateX(-100%);
  }

  .push-right.push-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  /* Up */
  .push-up.push-enter-from {
    opacity: 0;
    transform: translateY(100%);
  }

  .push-up.push-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  /* Down */
  .push-down.push-enter-from {
    opacity: 0;
    transform: translateY(-100%);
  }

  .push-down.push-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
</style>
