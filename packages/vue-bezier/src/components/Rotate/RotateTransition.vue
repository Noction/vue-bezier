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
    enter-active-class="noc-rotate-enter-active"
    enter-from-class="noc-rotate-enter-from"
    enter-to-class="noc-rotate-enter-to"
    leave-active-class="noc-rotate-leave-active"
    leave-from-class="noc-rotate-leave-from"
    leave-to-class="noc-rotate-leave-to"
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
  /* Define CSS properties for transition timing and delay */
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

  /* Active transition classes for enter and leave */
  .noc-rotate-enter-active,
  .noc-rotate-leave-active {
    transition: all var(--noc-transition-enter-duration) linear var(--noc-transition-enter-delay);
  }

  .noc-rotate-leave-active {
    transition: all var(--noc-transition-leave-duration) linear var(--noc-transition-leave-delay);
  }

  /* Define starting and ending states for the rotate transition */
  .noc-rotate-enter-from {
    opacity: 1;
    filter: blur(4px); /* Tailwind's blur-sm */
    transform: rotate(12deg);
  }

  .noc-rotate-enter-to {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
    transform: rotate(0deg);
  }

  .noc-rotate-leave-from {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
    transform: rotate(0deg);
  }

  .noc-rotate-leave-to {
    opacity: 1;
    filter: blur(4px); /* Tailwind's blur-sm */
    transform: rotate(12deg);
  }
</style>
