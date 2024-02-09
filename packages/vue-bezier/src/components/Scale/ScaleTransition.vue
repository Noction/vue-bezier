<template>
  <component
    :is="componentType"
    :tag="props.tag"
    name="noc-scale"
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
  origin: 'top left',
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
  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to { opacity: 1; }
  }

  @keyframes scale-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  .noc-scale-enter-active { animation-name: scale-in; }
  .noc-scale-leave-active { animation-name: scale-out; }
  .noc-scale-move { transition: transform .3s cubic-bezier(.25, .8, .5, 1); }
</style>
