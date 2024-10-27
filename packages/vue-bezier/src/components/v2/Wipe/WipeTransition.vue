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
    enter-active-class="wipe-enter-active"
    enter-from-class="wipe-enter-from"
    enter-to-class="wipe-enter-to"
    leave-active-class="wipe-leave-active"
    leave-from-class="wipe-leave-from"
    leave-to-class="wipe-leave-to"
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
  syntax: "<time>";
  inherits: false;
  initial-value: 0.5s;
}
@property --transition-leave-duration {
  syntax: "<time>";
  inherits: false;
  initial-value: 0.49s;
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

.wipe-enter-active {
  transition: transform var(--transition-enter-duration) ease-out var(--transition-enter-delay);
  z-index: 10;
}

.wipe-leave-active {
  position: absolute;
  transition: transform calc(var(--transition-leave-duration) - 0.01s) ease var(--transition-leave-delay);
}

.wipe-enter-from {
  transform: translateX(-100%);
}

.wipe-enter-to {
  transform: translateX(0);
}
</style>
