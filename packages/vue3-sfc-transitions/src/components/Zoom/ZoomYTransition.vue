<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoomInY"
    move-class="zoom-move"
    leave-active-class="zoomOutY"
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

<style scoped lang="scss">
@import 'move';

@keyframes zoomInY {
  from {
    opacity: 0;
    transform: scaleY(0);
  }

  50% {
    opacity: 1;
    transform: scaleY(1);
  }
}

.zoomInY {
  animation-name: zoomInY;
}

@keyframes zoomOutY {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scaleY(0);
  }

  to {
    opacity: 0;
  }
}

.zoomOutY {
  animation-name: zoomOutY;
}
</style>
