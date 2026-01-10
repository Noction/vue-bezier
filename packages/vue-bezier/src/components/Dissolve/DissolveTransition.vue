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
    enter-active-class="dissolve-enter-active"
    enter-from-class="dissolve-enter-from"
    enter-to-class="dissolve-enter-to"
    leave-active-class="dissolve-leave-active"
    leave-from-class="dissolve-leave-from"
    leave-to-class="dissolve-leave-to"
    move-class="dissolve-move"
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

  .dissolve-enter-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--transition-enter-duration) ease var(--transition-enter-delay);
    will-change: opacity;
  }

  .dissolve-leave-active {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    backface-visibility: hidden;
    transition: opacity var(--transition-leave-duration) ease var(--transition-leave-delay);
    will-change: opacity;
  }

  .dissolve-enter-from,
  .dissolve-leave-to {
    opacity: 0;
  }

  .dissolve-enter-to,
  .dissolve-leave-from {
    opacity: 1;
  }
</style>
