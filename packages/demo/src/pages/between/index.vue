<script setup lang="ts">
import type { TransitionType } from '../../../types/transitionInfo'
import { watch } from 'vue'
import { options, state } from '@/composables/options'
import { TransitionInfoKey } from '../../../types/symbols'
import { injectStrict } from '../../../utils'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  component: string
  labelA: string
  labelB: string
  origin?: string
}>()

const { transitionType } = injectStrict(TransitionInfoKey)

watch(() => props.component, (newComponent) => {
  transitionType.value = newComponent as TransitionType
}, { immediate: true })
</script>

<template>
  <component
    :is="component"
    :duration="{ enter: options.enter, leave: options.leave }"
    :delay="options.delay"
    :origin="origin"
  >
    <div
      v-if="state.shown"
      class="grid place-content-center rounded-lg border border-blue-200 h-40 w-full bg-blue-100 dark:border-sky-500 dark:bg-sky-950"
    >
      <div class="text-xl font-semibold text-blue-600 dark:text-sky-100">
        {{ labelA }}
      </div>
    </div>
    <div
      v-else
      class="grid place-content-center rounded-lg border border-green-200 h-40 w-full bg-green-100 dark:border-blue-500 dark:bg-blue-950"
    >
      <div class="text-xl font-semibold text-green-600 dark:text-blue-100">
        {{ labelB }}
      </div>
    </div>
  </component>
</template>
