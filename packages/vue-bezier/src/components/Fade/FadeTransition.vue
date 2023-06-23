<template>
  <component
    :is="componentType"
    :tag="tag"
    enter-active-class="fade-in"
    move-class="fade-move"
    leave-active-class="fade-out"
    v-bind="{ ...$attrs, ...hooks }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
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

const props = defineProps(buildProps())
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)
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
