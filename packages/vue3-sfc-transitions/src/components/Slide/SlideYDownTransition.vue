<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="slideYDownIn"
    leave-active-class="slideYDownOut"
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

<style lang="scss">
@import 'move';

@keyframes slideYDownIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
  }
}

.slideYDownIn {
  animation-name: slideYDownIn;
}

@keyframes slideYDownOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(15px);
  }
}

.slideYDownOut {
  animation-name: slideYDownOut;
}
</style>
