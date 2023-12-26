<template>
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="{ ...$attrs, ...hooks }"
    enter-active-class="scale-in"
    move-class="scale-move"
    leave-active-class="scale-out"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Events, Props } from '../../../types'
import { buildComponentType, buildHooks } from '../../composable'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 300,
  group: false,
  origin: 'top left',
  styles: () => ({
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
  }),
  tag: 'span'
})

const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
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
