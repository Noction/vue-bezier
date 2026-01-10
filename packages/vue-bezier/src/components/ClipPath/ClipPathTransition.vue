<script setup lang="ts">
import type { ComponentProps } from '@/types'
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
  return clipType === 'circle' ? 'clip-circle' : 'clip-square'
})
</script>

<template>
  <Transition
    mode="default"
    :class="[clipTypeClass]"
    enter-active-class="clip-enter-active"
    enter-from-class="clip-enter-from"
    enter-to-class="clip-enter-to"
    leave-active-class="clip-leave-active"
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
    initial-value: 1s;
  }
  @property --transition-leave-duration {
    syntax: "<time>";
    inherits: false;
    initial-value: .99s;
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

  .clip-enter-active {
    position: relative;
    transition: all var(--transition-enter-duration) ease-in var(--transition-enter-delay);
  }

  .clip-leave-active {
    position: absolute;
    transition: all calc(var(--transition-leave-duration) - .01s) linear calc(var(--transition-leave-delay));
  }

  .clip-circle.clip-enter-from {
    clip-path: circle(0%);
  }

  .clip-circle.clip-enter-to {
    clip-path: circle(100%);
  }

  .clip-square.clip-enter-from {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }

  .clip-square.clip-enter-to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
