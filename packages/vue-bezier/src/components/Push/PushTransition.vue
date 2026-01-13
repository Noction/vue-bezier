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
  return `noc-push-${direction}`
})
</script>

<template>
  <Transition
    :class="[pushDirectionClass]"
    enter-active-class="noc-push-enter-active"
    enter-from-class="noc-push-enter-from"
    enter-to-class="noc-push-enter-to"
    leave-active-class="noc-push-leave-active"
    leave-from-class="noc-push-leave-from"
    leave-to-class="noc-push-leave-to"
    :style="{
      '--noc-transition-enter-duration': transitionDuration.enter,
      '--noc-transition-leave-duration': transitionDuration.leave,
      '--noc-transition-enter-delay': transitionDelay.enter,
      '--noc-transition-leave-delay': transitionDelay.leave,
    }"
  >
    <slot />
  </Transition>
</template>

<style scoped>
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

  .noc-push-enter-active,
  .noc-push-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay), transform var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
    will-change: opacity, transform;
  }

  .noc-push-leave-active {
    backface-visibility: hidden;
    transition: opacity var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay), transform var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
  }

  .noc-push-enter-to,
  .noc-push-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  /* Left */
  .noc-push-left.noc-push-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .noc-push-left.noc-push-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  /* Right */
  .noc-push-right.noc-push-enter-from {
    opacity: 0;
    transform: translateX(-100%);
  }

  .noc-push-right.noc-push-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  /* Up */
  .noc-push-up.noc-push-enter-from {
    opacity: 0;
    transform: translateY(100%);
  }

  .noc-push-up.noc-push-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  /* Down */
  .noc-push-down.noc-push-enter-from {
    opacity: 0;
    transform: translateY(-100%);
  }

  .noc-push-down.noc-push-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
</style>
