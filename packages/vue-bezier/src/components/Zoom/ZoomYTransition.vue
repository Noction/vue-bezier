<template>
  <component
    :is="componentType"
    :tag="tag"
    enter-active-class="zoom-in-y"
    move-class="zoom-move"
    leave-active-class="zoom-out-y"
    v-bind="{ ...$attrs, ...hooks }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Events, Props } from '../../../types'
import { buildComponentType, buildHooks, buildTag } from '../../composable'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 300,
  group: false,
  origin: '',
  styles: () => ({
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
  }),
  tag: 'span'
})
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)

</script>

<style lang="scss">
  @import 'move';

  @keyframes zoom-in-y {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes zoom-out-y {
    0% { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    100% { opacity: 0; }
  }

  .zoom-in-y { animation-name: zoom-in-y; }
  .zoom-out-y { animation-name: zoom-out-y; }
</style>
