<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-zoom-y"
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
    animationTimingFunction: 'ease-out'
  }),
  tag: 'span'
})

const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)

const hooks = useHooks(props, emit)

</script>

<style>
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

  .noc-zoom-y-enter-active { animation-name: zoom-in-y; }
  .noc-zoom-y-leave-active { animation-name: zoom-out-y; }
  .noc-zoom-y-move { transition: transform .3s ease-out; }
</style>
