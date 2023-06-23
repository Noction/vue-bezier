<template>
  <component
    :is="componentType"
    :tag="tag"
    type="animation"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-y-in"
    move-class="slide-move"
    leave-active-class="slide-y-out"
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

  @keyframes slide-y-in {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-y-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateY(-15px);
    }
  }

  .slide-y-in { animation-name: slide-y-in; }
  .slide-y-out { animation-name: slide-y-out; }
</style>
