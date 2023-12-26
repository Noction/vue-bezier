<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-x-right-in"
    move-class="slide-move"
    leave-active-class="slide-x-right-out"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Events, Props } from '../../../types'
import { buildComponentType, buildHooks } from '../../composable'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
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
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes slide-x-right-in {
    from {
      opacity: 0;
      transform: translateX(15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-x-right-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateX(15px);
    }
  }

  .slide-x-right-in { animation-name: slide-x-right-in; }
  .slide-x-right-out { animation-name: slide-x-right-out; }
</style>
