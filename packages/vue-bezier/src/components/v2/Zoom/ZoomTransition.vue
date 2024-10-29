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
    enter-active-class="zoom-enter-active"
    enter-from-class="zoom-enter-from"
    enter-to-class="zoom-enter-to"
    leave-active-class="zoom-leave-active"
    leave-from-class="zoom-leave-from"
    leave-to-class="zoom-leave-to"
    mode="out-in"
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
    initial-value: .5s;
  }
  @property --transition-leave-duration {
    syntax: "<time>";
    inherits: false;
    initial-value: .5s;
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

  .zoom-enter-active,
  .zoom-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    transition: transform var(--transition-enter-duration) ease var(--transition-enter-delay);
    will-change: transform;
  }

  .zoom-leave-active {
    transition: transform var(--transition-leave-duration) ease var(--transition-leave-delay);
  }

  .zoom-enter-from,
  .zoom-leave-to {
    transform: scale(1.05);
  }

  .zoom-enter-to,
  .zoom-leave-from {
    transform: scale(1);
  }
</style>
