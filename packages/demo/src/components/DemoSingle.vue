<script setup lang="ts">
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { options, state } from '../composables/options'
import TransitionDuration from './TransitionDuration.vue'

defineOptions({ inheritAttrs: false })

const { transitionType } = injectStrict(TransitionInfoKey)
</script>

<template>
  <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
    <component
      :is="transitionType"
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
    >
      <div
        v-if="state.shown"
        class="grid place-content-center rounded-lg border border-blue-700/10 h-40 w-full bg-blue-400/20 dark:border-sky-500 dark:bg-sky-600/50"
      >
        <div
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
          v-text="transitionType"
        />
      </div>
    </component>
  </div>

  <TransitionDuration>
    <button
      class="grow rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0 disabled:opacity-75 disabled:pointer-events-none"
      type="button"
      @click="state.shown = !state.shown"
    >
      Toggle
    </button>
  </TransitionDuration>
</template>
