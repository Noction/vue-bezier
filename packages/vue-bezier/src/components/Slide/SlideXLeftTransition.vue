<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-x-left-in"
    move-class="slide-move"
    leave-active-class="slide-x-left-out"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export const customProps = {
  styles: {
    default: () => {
      return {
        animationFillMode: 'both',
        animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
      }
    },
    type: Object
  }
}
</script>

<script setup lang="ts">
import type { Events } from '../../../types'
import {
  buildComponentType,
  buildHooks,
  buildProps,
  buildTag
} from '../../composable'

defineOptions({ inheritAttrs: false })
const props = defineProps(buildProps(customProps))
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

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

  .slide-x-left-in { animation-name: slide-x-left-in; }
  .slide-x-left-out { animation-name: slide-x-left-out; }
</style>
