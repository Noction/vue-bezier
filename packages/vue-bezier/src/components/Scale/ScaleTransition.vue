<script setup lang="ts">
import type { ComponentProps } from '@/types'
import { computed } from 'vue'

const { duration = 300, delay = 0, origin = 'top left' } = defineProps<ComponentProps>()

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
</script>

<template>
  <Transition
    enter-active-class="scale-enter-active"
    enter-from-class="scale-enter-from"
    enter-to-class="scale-enter-to"
    leave-active-class="scale-leave-active"
    leave-from-class="scale-leave-from"
    leave-to-class="scale-leave-to"
    move-class="scale-move"
    :style="{
      '--transition-enter-duration': transitionDuration.enter,
      '--transition-leave-duration': transitionDuration.leave,
      '--transition-enter-delay': transitionDelay.enter,
      '--transition-leave-delay': transitionDelay.leave,
      '--transform-origin': origin,
    }"
  >
    <slot />
  </Transition>
</template>

<style scoped>
  @property --transition-enter-duration {
    syntax: "<time>";
    inherits: false;
    initial-value: .3s;
  }

  @property --transition-leave-duration {
    syntax: "<time>";
    inherits: false;
    initial-value: .3s;
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

  .scale-enter-active,
  .scale-leave-active {
    transform-origin: var(--transform-origin, top left);
    transition: all var(--transition-enter-duration) ease-out var(--transition-enter-delay);
    will-change: opacity, transform;
  }

  .scale-leave-active {
    transition: all var(--transition-leave-duration) ease-out var(--transition-leave-delay);
  }

  .scale-enter-from {
    opacity: 0;
    transform: scale(0);
  }

  .scale-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .scale-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .scale-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .scale-move {
    transition: transform .3s cubic-bezier(.25, .8, .5, 1);
  }
</style>
