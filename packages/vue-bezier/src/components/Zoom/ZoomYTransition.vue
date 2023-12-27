<template>
  <component
    :is="componentType"
    :tag="props.tag"
    enter-active-class="zoom-in-y"
    move-class="zoom-move"
    leave-active-class="zoom-out-y"
    v-bind="{ ...$attrs, ...hooks }"
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
    animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
  }),
  tag: 'span'
})
const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)
const hooks = useHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in-y {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes zoom-out-y {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    100% { opacity: 0; }
  }

  .zoom-in-y { animation-name: zoom-in-y; }
  .zoom-out-y { animation-name: zoom-out-y; }
</style>
