<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-zoom-up"
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

  .noc-zoom-up-enter-active { animation-name: zoom-in-up; }
  .noc-zoom-up-leave-active { animation-name: zoom-out-up; }
  .noc-zoom-up-move { transition: transform .3s ease-out; }
</style>
