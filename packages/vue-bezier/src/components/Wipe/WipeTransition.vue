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
    enter-active-class="noc-wipe-enter-active"
    enter-from-class="noc-wipe-enter-from"
    enter-to-class="noc-wipe-enter-to"
    leave-active-class="noc-wipe-leave-active"
    leave-from-class="noc-wipe-leave-from"
    leave-to-class="noc-wipe-leave-to"
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
    initial-value: .5s;
  }

  @property --noc-transition-leave-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .49s;
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

  .noc-wipe-enter-active {
    z-index: 10;
    transition: transform var(--noc-transition-enter-duration) ease-out var(--noc-transition-enter-delay);
  }

  .noc-wipe-leave-active {
    position: absolute;
    transition: transform calc(var(--noc-transition-leave-duration) - .01s) ease var(--noc-transition-leave-delay);
  }

  .noc-wipe-enter-from {
    transform: translateX(-100%);
  }

  .noc-wipe-enter-to {
    transform: translateX(0);
  }
</style>
