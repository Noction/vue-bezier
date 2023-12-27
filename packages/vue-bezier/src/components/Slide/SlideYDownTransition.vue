<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-y-down-in"
    leave-active-class="slide-y-down-out"
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
    animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
  }),
  tag: 'span'
})
const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props)
const hooks = useHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

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

  .slide-y-down-in { animation-name: slide-y-down-in; }
  .slide-y-down-out { animation-name: slide-y-down-out; }
</style>
