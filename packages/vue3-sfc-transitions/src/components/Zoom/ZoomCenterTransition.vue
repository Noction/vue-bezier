<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoomIn"
    move-class="zoom-move"
    leave-active-class="zoomOut"
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

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  animation-name: zoomOut;
}
</style>
