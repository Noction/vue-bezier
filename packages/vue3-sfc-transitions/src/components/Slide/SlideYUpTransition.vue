<template>
  <component
    :is="componentType"
    :tag="tag"
    type="animation"
    v-bind="$attrs"
    enter-active-class="slideYIn"
    move-class="slide-move"
    leave-active-class="slideYOut"
    v-on="hooks"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export const customProps = {
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: 'both',
        animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
      }
    }
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

@keyframes slideYIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }

  to {
    opacity: 1;
  }
}

.slideYIn {
  animation-name: slideYIn;
}

@keyframes slideYOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(-15px);
  }
}

.slideYOut {
  animation-name: slideYOut;
}
</style>
