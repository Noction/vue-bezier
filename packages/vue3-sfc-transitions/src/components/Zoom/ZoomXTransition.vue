<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoomInX"
    move-class="zoom-move"
    leave-active-class="zoomOutX"
    v-on="hooks"
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
import {
  buildComponentType,
  buildEmits,
  buildHooks,
  buildProps,
  buildTag
} from '../../composable'

const props = defineProps(buildProps(customProps))
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)
</script>

<style lang="scss">
@import 'move';

@keyframes zoomInX {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  50% {
    opacity: 1;
  }
}

.zoomInX {
  animation-name: zoomInX;
}

@keyframes zoomOutX {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 0;
  }
}

.zoomOutX {
  animation-name: zoomOutX;
}
</style>
