<script setup lang="ts">
import { options, state } from '@/composables/options'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  component: string
  label: string
  origin?: string
}>()
</script>

<template>
  <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
    <component
      :is="component"
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
      :origin="origin"
    >
      <div
        v-if="state.shown"
        class="grid place-content-center rounded-lg border h-40 w-full border-sky-200 bg-sky-100 dark:border-sky-800 dark:bg-sky-950"
      >
        <div class="text-xl font-semibold text-blue-600 dark:text-sky-100">
          {{ label }}
        </div>
      </div>
    </component>
  </div>
</template>
