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
    name="noc-slide-down"
    v-bind="{ ...$attrs, ...hooks }"
  >
    <slot />
  </component>
</template>

<style>
  @keyframes slide-y-down-in {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-y-down-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateY(15px);
    }
  }

  .noc-slide-down-enter-active { animation-name: slide-y-down-in; }
  .noc-slide-down-leave-active { animation-name: slide-y-down-out; }
  .noc-slide-down-move { transition: transform .3s ease-out; }
</style>
