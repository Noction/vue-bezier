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
    enter-active-class="noc-dissolve-enter-active"
    enter-from-class="noc-dissolve-enter-from"
    enter-to-class="noc-dissolve-enter-to"
    leave-active-class="noc-dissolve-leave-active"
    leave-from-class="noc-dissolve-leave-from"
    leave-to-class="noc-dissolve-leave-to"
    move-class="noc-dissolve-move"
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

  .noc-dissolve-enter-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--noc-transition-enter-duration) ease var(--noc-transition-enter-delay);
    will-change: opacity;
  }

  .noc-dissolve-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--noc-transition-leave-duration) ease var(--noc-transition-leave-delay);
    will-change: opacity;
  }

  .noc-dissolve-enter-from,
  .noc-dissolve-leave-to {
    opacity: 0;
  }

  .noc-dissolve-enter-to,
  .noc-dissolve-leave-from {
    opacity: 1;
  }
</style>
