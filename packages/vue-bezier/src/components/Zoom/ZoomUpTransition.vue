<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="zoom-in-up"
    move-class="zoom-move"
    leave-active-class="zoom-out-up"
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

  @keyframes zoom-in-up {
    0% {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top center;
    }

    50% { opacity: 1; }

    100% { transform: scaleY(1); }
  }

  @keyframes zoom-out-up {
    0% { opacity: 1; }

    50% { transform: scaleY(0); }

    100% { opacity: 0; }
  }

  .zoom-in-up { animation-name: zoom-in-up; }
  .zoom-out-up { animation-name: zoom-out-up; }
</style>
