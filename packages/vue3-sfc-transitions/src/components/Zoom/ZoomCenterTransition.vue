<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoom-in"
    move-class="zoom-move"
    leave-active-class="zoom-out"
    v-on="hooks"
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
import {
  buildComponentType,
  buildEmits,
  buildHooks,
  buildProps,
  buildTag
} from '../../composable'

const props = defineProps(buildProps())
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% { opacity: 1; }
  }

  @keyframes zoom-out {
    from { opacity: 1; }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    to { opacity: 0; }
  }

  .zoom-in { animation-name: zoom-in; }
  .zoom-out { animation-name: zoom-out; }
</style>
