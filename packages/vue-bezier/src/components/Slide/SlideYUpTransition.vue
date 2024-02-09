<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-slide-up"
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
  @keyframes slide-y-in {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-y-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateY(-15px);
    }
  }

  .noc-slide-up-enter-active { animation-name: slide-y-in; }
  .noc-slide-up-leave-active { animation-name: slide-y-out; }
  .noc-slide-up-move { transition: transform .3s ease-out; }
</style>
