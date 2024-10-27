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
    animationTimingFunction: 'ease-out',
  }),
  tag: 'span',
})

const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)

const hooks = useHooks(props, emit)
</script>

<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-zoom-x"
    v-bind="{ ...$attrs, ...hooks }"
  >
    <slot />
  </component>
</template>

<style>
  @keyframes zoom-in-x {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }

    50% { opacity: 1; }
  }

  @keyframes zoom-out-x {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleX(0);
    }

    100% { opacity: 0; }
  }

  .noc-zoom-x-enter-active { animation-name: zoom-in-x; }
  .noc-zoom-x-leave-active { animation-name: zoom-out-x; }
  .noc-zoom-x-move { transition: transform .3s ease-out; }
</style>
