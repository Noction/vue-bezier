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
    enter-active-class="noc-scale-enter-active"
    enter-from-class="noc-scale-enter-from"
    enter-to-class="noc-scale-enter-to"
    leave-active-class="noc-scale-leave-active"
    leave-from-class="noc-scale-leave-from"
    leave-to-class="noc-scale-leave-to"
    move-class="noc-scale-move"
    :style="{
      '--noc-transition-enter-duration': transitionDuration.enter,
      '--noc-transition-leave-duration': transitionDuration.leave,
      '--noc-transition-enter-delay': transitionDelay.enter,
      '--noc-transition-leave-delay': transitionDelay.leave,
      '--noc-transform-origin': origin,
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

  .noc-scale-enter-active,
  .noc-scale-leave-active {
    transform-origin: var(--noc-transform-origin, top left);
    transition: all var(--noc-transition-enter-duration) ease-out var(--noc-transition-enter-delay);
    will-change: opacity, transform;
  }

  .noc-scale-leave-active {
    transition: all var(--noc-transition-leave-duration) ease-out var(--noc-transition-leave-delay);
  }

  .noc-scale-enter-from {
    opacity: 0;
    transform: scale(0);
  }

  .noc-scale-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .noc-scale-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .noc-scale-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .noc-scale-move {
    transition: transform .3s cubic-bezier(.25, .8, .5, 1);
  }
</style>
