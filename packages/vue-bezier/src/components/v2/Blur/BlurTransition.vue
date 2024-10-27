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
    enter-active-class="blur-enter-active"
    enter-from-class="blur-enter-from"
    enter-to-class="blur-enter-to"
    leave-active-class="blur-leave-active"
    leave-from-class="blur-leave-from"
    leave-to-class="blur-leave-to"
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
  syntax: "<time>";
  inherits: false;
  initial-value: 0.5s;
}
@property --transition-leave-duration {
  syntax: "<time>";
  inherits: false;
  initial-value: 0.5s;
}
@property --transition-enter-delay {
  syntax: "<time>";
  inherits: false;
  initial-value: 0s;
}
@property --transition-leave-delay {
  syntax: "<time>";
  inherits: false;
  initial-value: 0s;
}

/* Active transition classes for enter and leave */
.blur-enter-active,
.blur-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
  transition: all var(--transition-enter-duration) ease var(--transition-enter-delay);
  will-change: opacity, filter;
}

.blur-leave-active {
  transition: all var(--transition-leave-duration) ease var(--transition-leave-delay);
}

.blur-enter-from {
  opacity: 0;
  filter: blur(8px); /* Tailwind's blur-md */
}

.blur-enter-to {
  opacity: 1;
  filter: blur(0px); /* Tailwind's blur-none */
}

.blur-leave-from {
  opacity: 1;
  filter: blur(0px); /* Tailwind's blur-none */
}

.blur-leave-to {
  opacity: 0;
  filter: blur(8px); /* Tailwind's blur-md */
}
</style>
