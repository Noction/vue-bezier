<script setup lang="ts">
import type { ComponentProps } from '../../types'
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
    enter-active-class="noc-zoom-enter-active"
    enter-from-class="noc-zoom-enter-from"
    enter-to-class="noc-zoom-enter-to"
    leave-active-class="noc-zoom-leave-active"
    leave-from-class="noc-zoom-leave-from"
    leave-to-class="noc-zoom-leave-to"
    mode="out-in"
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

  .noc-zoom-enter-active,
  .noc-zoom-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    transition: transform var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
    will-change: transform;
  }

  .noc-zoom-leave-active {
    transition: transform var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
  }

  .noc-zoom-enter-from,
  .noc-zoom-leave-to {
    transform: scale(1.05);
  }

  .noc-zoom-enter-to,
  .noc-zoom-leave-from {
    transform: scale(1);
  }
</style>
