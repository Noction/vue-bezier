<template>
  <component
    :is="componentType"
    :tag="tag"
    enter-active-class="zoom-in-y"
    move-class="zoom-move"
    leave-active-class="zoom-out-y"
    v-bind="{ ...$attrs, ...hooks }"
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
        animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
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

  @keyframes zoom-in-y {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes zoom-out-y {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    100% { opacity: 0; }
  }

  .zoom-in-y { animation-name: zoom-in-y; }
  .zoom-out-y { animation-name: zoom-out-y; }
</style>
