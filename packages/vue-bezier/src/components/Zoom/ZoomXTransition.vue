<template>
  <component
    :is="componentType"
    :tag="tag"
    enter-active-class="zoom-in-x"
    move-class="zoom-move"
    leave-active-class="zoom-out-x"
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

export default {
  inheritAttrs: false
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

const props = defineProps(buildProps(customProps))
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in-x {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }

    50% { opacity: 1; }
  }

  @keyframes zoom-out-x {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleX(0);
    }

    100% { opacity: 0; }
  }

  .zoom-in-x { animation-name: zoom-in-x; }
  .zoom-out-x { animation-name: zoom-out-x; }
</style>
