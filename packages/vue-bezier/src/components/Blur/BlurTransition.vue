<script setup lang="ts">
import { computed } from 'vue'

// Destructuring props with default values
const { duration = 500, delay = 0 } = defineProps<{
  duration?: number | { enter: number, leave: number }
  delay?: number | { enter: number, leave: number }
}>()

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
    enter-active-class="noc-blur-enter-active"
    enter-from-class="noc-blur-enter-from"
    enter-to-class="noc-blur-enter-to"
    leave-active-class="noc-blur-leave-active"
    leave-from-class="noc-blur-leave-from"
    leave-to-class="noc-blur-leave-to"
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
    initial-value: .5s;
  }

  @property --noc-transition-leave-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .5s;
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
  .noc-blur-enter-active,
  .noc-blur-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    transition: all var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
    will-change: opacity, filter;
  }

  .noc-blur-leave-active {
    transition: all var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
  }

  .noc-blur-enter-from {
    opacity: 0;
    filter: blur(8px); /* Tailwind's blur-md */
  }

  .noc-blur-enter-to {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
  }

  .noc-blur-leave-from {
    opacity: 1;
    filter: blur(0); /* Tailwind's blur-none */
  }

  .noc-blur-leave-to {
    opacity: 0;
    filter: blur(8px); /* Tailwind's blur-md */
  }
</style>
