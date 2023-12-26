<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="scale-in"
    move-class="scale-move"
    leave-active-class="scale-out"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export const customProps = {
  origin: {
    default: 'top left',
    type: String
  },
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
import type { Events } from '../../../types'
import {
  buildComponentType,
  buildHooks,
  buildProps,
  buildTag
} from '../../composable'

const props = defineProps(buildProps(customProps))
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style>
  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to { opacity: 1; }
  }

  @keyframes scale-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  .scale-in { animation-name: scale-in; }
  .scale-out { animation-name: scale-out; }
  .scale-move { transition: transform .3s cubic-bezier(.25, .8, .5, 1); }
</style>
