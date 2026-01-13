<script setup lang="ts">
import type { ComponentProps } from '../../types'
import { computed } from 'vue'

const { duration = 1000, delay = 0, clipType = 'circle' } = defineProps<ComponentProps & { clipType?: 'circle' | 'square' }>()

const transitionDuration = computed(() => ({
  enter: `${typeof duration === 'number' ? duration : duration.enter}ms`,
  leave: `${typeof duration === 'number' ? duration : duration.leave}ms`,
}))

const transitionDelay = computed(() => ({
  enter: `${typeof delay === 'number' ? delay : delay.enter}ms`,
  leave: `${typeof delay === 'number' ? delay : delay.leave}ms`,
}))

const clipTypeClass = computed(() => {
  return clipType === 'circle' ? 'noc-clip-circle' : 'noc-clip-square'
})
</script>

<template>
  <Transition
    mode="default"
    :class="[clipTypeClass]"
    enter-active-class="noc-clip-enter-active"
    enter-from-class="noc-clip-enter-from"
    enter-to-class="noc-clip-enter-to"
    leave-active-class="noc-clip-leave-active"
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
    initial-value: 1s;
  }

  @property --noc-transition-leave-duration {
    syntax: '<time>';
    inherits: false;
    initial-value: .99s;
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

  .noc-clip-enter-active {
    position: relative;
    transition: all var(--noc-transition-enter-duration) ease-in var(--noc-transition-enter-delay);
  }

  .noc-clip-leave-active {
    position: absolute;
    transition: all calc(var(--noc-transition-leave-duration) - .01s) linear calc(var(--noc-transition-leave-delay));
  }

  .noc-clip-circle.noc-clip-enter-from {
    clip-path: circle(0%);
  }

  .noc-clip-circle.noc-clip-enter-to {
    clip-path: circle(100%);
  }

  .noc-clip-square.noc-clip-enter-from {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }

  .noc-clip-square.noc-clip-enter-to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
