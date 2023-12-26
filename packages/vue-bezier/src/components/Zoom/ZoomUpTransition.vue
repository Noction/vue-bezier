<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="zoom-in-up"
    move-class="zoom-move"
    leave-active-class="zoom-out-up"
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
        animationTimingFunction: 'ease-out'
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

  .zoom-in-up { animation-name: zoom-in-up; }
  .zoom-out-up { animation-name: zoom-out-up; }
</style>
