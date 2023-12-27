<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="zoom-in"
    move-class="zoom-move"
    leave-active-class="zoom-out"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { ComponentEvents, ComponentProps } from '@/types'
import { buildComponentType, useHooks } from '@/composables'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<ComponentProps>(), {
  delay: 0,
  duration: 300,
  group: false,
  origin: '',
  styles: () => ({
    animationFillMode: 'both',
    animationTimingFunction: 'ease-out'
  }),
  tag: 'span'
})
const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)
const hooks = useHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in {
    0% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% { opacity: 1; }
  }

  @keyframes zoom-out {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    100% { opacity: 0; }
  }

  .zoom-in { animation-name: zoom-in; }
  .zoom-out { animation-name: zoom-out; }
</style>
