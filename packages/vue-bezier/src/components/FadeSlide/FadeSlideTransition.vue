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
    enter-active-class="noc-fade-slide-enter-active"
    enter-from-class="noc-fade-slide-enter-from"
    enter-to-class="noc-fade-slide-enter-to"
    leave-active-class="noc-fade-slide-leave-active"
    leave-from-class="noc-fade-slide-leave-from"
    leave-to-class="noc-fade-slide-leave-to"
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

  .noc-fade-slide-enter-active,
  .noc-fade-slide-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: all var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
  }

  .noc-fade-slide-leave-active {
    backface-visibility: hidden;
    transition: all var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
  }

  .noc-fade-slide-enter-from {
    opacity: 0;
    transform: translateY(.5rem);
  }

  .noc-fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .noc-fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .noc-fade-slide-leave-to {
    opacity: 0;
    transform: translateY(.5rem);
  }
</style>
