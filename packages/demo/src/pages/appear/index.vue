<script setup lang="ts">
import type { TransitionType } from '../../../types/transitionInfo'
import { watch } from 'vue'
import { options, state } from '@/composables/options'
import { TransitionInfoKey } from '../../../types/symbols'
import { injectStrict } from '../../../utils'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  component: string
  label: string
  origin?: string
}>()

const { transitionType } = injectStrict(TransitionInfoKey)

watch(() => props.component, (newComponent) => {
  transitionType.value = newComponent as TransitionType
}, { immediate: true })
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
