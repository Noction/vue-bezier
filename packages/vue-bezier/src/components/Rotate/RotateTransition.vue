<script setup lang="ts">
import type { ComponentProps } from '@/types'
import { computed } from 'vue'

const { duration = 300, delay = 0 } = defineProps<ComponentProps>()

// Compute the transition durations
const transitionDuration = computed(() => ({
  enter: `${typeof duration === 'number' ? duration : duration.enter}ms`,
  leave: `${typeof duration === 'number' ? duration : duration.leave}ms`,
}))

// Compute the transition delays
const transitionDelay = computed(() => ({
  enter: `${typeof delay === 'number' ? delay : delay.enter}ms`,
  leave: `${typeof delay === 'number' ? delay : delay.leave}ms`,
}))
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="rotate-enter-active"
    enter-from-class="rotate-enter-from"
    enter-to-class="rotate-enter-to"
    leave-active-class="rotate-leave-active"
    leave-from-class="rotate-leave-from"
    leave-to-class="rotate-leave-to"
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
  /* Define CSS properties for transition timing and delay */
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

  /* Active transition classes for enter and leave */
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all var(--transition-enter-duration) linear var(--transition-enter-delay);
  }

  .rotate-leave-active {
    transition: all var(--transition-leave-duration) linear var(--transition-leave-delay);
  }

  /* Define starting and ending states for the rotate transition */
  .rotate-enter-from {
    opacity: 1;
    filter: blur(4px); /* Tailwind's blur-sm */
    transform: rotate(12deg);
  }

  .rotate-enter-to {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
    transform: rotate(0deg);
  }

  .rotate-leave-from {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
    transform: rotate(0deg);
  }

  .rotate-leave-to {
    opacity: 1;
    filter: blur(4px); /* Tailwind's blur-sm */
    transform: rotate(12deg);
  }
</style>
