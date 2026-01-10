<script setup lang="ts">
import type { ComponentProps } from '@/types'
import { computed } from 'vue'

const { duration = 300, delay = 0 } = defineProps<ComponentProps>()

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
    enter-active-class="fade-slide-enter-active"
    enter-from-class="fade-slide-enter-from"
    enter-to-class="fade-slide-enter-to"
    leave-active-class="fade-slide-leave-active"
    leave-from-class="fade-slide-leave-from"
    leave-to-class="fade-slide-leave-to"
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

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: all var(--transition-enter-duration) ease var(--transition-enter-delay);
  }

  .fade-slide-leave-active {
    backface-visibility: hidden;
    transition: all var(--transition-leave-duration) ease var(--transition-leave-delay);
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(.5rem);
  }

  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(.5rem);
  }
</style>
