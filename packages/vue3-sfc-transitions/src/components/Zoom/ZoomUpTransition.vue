<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoomInUp"
    move-class="zoom-move"
    leave-active-class="zoomOutUp"
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
        animationTimingFunction: 'ease-out'
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

@keyframes zoomInUp {
  from {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top center;
  }

  50% {
    opacity: 1;
  }
  to {
    transform: scaleY(1);
  }
}

.zoomInUp {
  animation-name: zoomInUp;
}

@keyframes zoomOutUp {
  from {
    opacity: 1;
  }
  50% {
    transform: scaleY(0);
  }
  to {
    opacity: 0;
  }
}

.zoomOutUp {
  animation-name: zoomOutUp;
}
</style>
