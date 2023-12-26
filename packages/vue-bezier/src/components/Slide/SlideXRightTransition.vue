<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="slide-x-right-in"
    move-class="slide-move"
    leave-active-class="slide-x-right-out"
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
</script>

<script setup lang="ts">
import { Events } from '../../../types'
import {
  buildComponentType,
  buildHooks,
  buildProps,
  buildTag
} from '../../composable'

defineOptions({ inheritAttrs: false })
const props = defineProps(buildProps(customProps))
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes slide-x-right-in {
    from {
      opacity: 0;
      transform: translateX(15px);
    }

    to { opacity: 1; }
  }

  @keyframes slide-x-right-out {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateX(15px);
    }
  }

  .slide-x-right-in { animation-name: slide-x-right-in; }
  .slide-x-right-out { animation-name: slide-x-right-out; }
</style>
