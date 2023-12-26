<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="zoom-in"
    move-class="zoom-move"
    leave-active-class="zoom-out"
  >
    <slot />
  </component>
</template>

<script lang="ts">
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

const props = defineProps(buildProps())
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in {
    0% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% { opacity: 1; }
  }

  @keyframes zoom-out {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    100% { opacity: 0; }
  }

  .zoom-in { animation-name: zoom-in; }
  .zoom-out { animation-name: zoom-out; }
</style>
