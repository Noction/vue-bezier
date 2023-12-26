<template>
  <component
    :is="componentType"
    :tag="props.tag"
    enter-active-class="fade-in"
    move-class="fade-move"
    leave-active-class="fade-out"
    v-bind="{ ...$attrs, ...hooks }"
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
  origin: '',
  styles: () => ({
    animationFillMode: 'both',
    animationTimingFunction: 'ease-out'
  }),
  tag: 'span'
})
const emit = defineEmits<Events>()

const componentType = buildComponentType(props)
const hooks = buildHooks(props, emit)

</script>

<style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .fade-in { animation-name: fade-in; }
  .fade-out { animation-name: fade-out; }
  .fade-move { transition: transform .3s ease-out; }
</style>
