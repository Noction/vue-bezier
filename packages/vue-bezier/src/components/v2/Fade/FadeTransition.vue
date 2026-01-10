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
    enter-active-class="fade-enter-active"
    enter-from-class="fade-enter-from"
    enter-to-class="fade-enter-to"
    leave-active-class="fade-leave-active"
    leave-from-class="fade-leave-from"
    leave-to-class="fade-leave-to"
    move-class="fade-move"
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

  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

  .fade-move {
    transition: transform .35s ease-out;
  }
</style>
