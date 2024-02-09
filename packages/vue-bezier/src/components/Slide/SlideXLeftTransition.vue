<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-slide-left"
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
  @keyframes slide-x-left-in {
    from {
      opacity: 0;
      transform: translateX(-15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-x-left-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateX(-15px);
    }
  }

  .noc-slide-left-enter-active { animation-name: slide-x-left-in; }
  .noc-slide-left-leave-active { animation-name: slide-x-left-out; }
  .noc-slide-left-move { transition: transform .3s ease-out; }
</style>
