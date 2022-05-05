<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="slideXRightIn"
    move-class="slide-move"
    leave-active-class="slideXRightOut"
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
        animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
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

@keyframes slideXRightIn {
  from {
    opacity: 0;
    transform: translateX(15px);
  }

  to {
    opacity: 1;
  }
}

.slideXRightIn {
  animation-name: slideXRightIn;
}

@keyframes slideXRightOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateX(15px);
  }
}

.slideXRightOut {
  animation-name: slideXRightOut;
}
</style>
