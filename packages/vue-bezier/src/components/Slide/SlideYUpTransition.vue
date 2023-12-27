<template>
  <component
    :is="componentType"
    :tag="props.tag"
    type="animation"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-y-in"
    move-class="slide-move"
    leave-active-class="slide-y-out"
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

  .slide-y-in { animation-name: slide-y-in; }
  .slide-y-out { animation-name: slide-y-out; }
</style>
