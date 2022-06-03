<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="zoom-in-y"
    move-class="zoom-move"
    leave-active-class="zoom-out-y"
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

  @keyframes zoom-in-y {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes zoom-out-y {
    from { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    to { opacity: 0; }
  }

  .zoom-in-y { animation-name: zoom-in-y; }
  .zoom-out-y { animation-name: zoom-out-y; }
</style>
