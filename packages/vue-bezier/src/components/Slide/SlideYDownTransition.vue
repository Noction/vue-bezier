<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-y-down-in"
    leave-active-class="slide-y-down-out"
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
