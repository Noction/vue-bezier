<template>
  <component
    :is="componentType"
    :tag="tag"
    v-bind="$attrs"
    enter-active-class="scaleIn"
    move-class="scale-move"
    leave-active-class="scaleOut"
    v-on="hooks"
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

<style>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
  }
}

.scaleIn {
  animation-name: scaleIn;
}

@keyframes scaleOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale(0);
  }
}

.scaleOut {
  animation-name: scaleOut;
}
.scale-move {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>
