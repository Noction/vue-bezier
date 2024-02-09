<template>
  <div class="flex h-full items-center">
    <component
      :is="transitionType"
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
    >
      <div
        v-if="state.shown"
        class="rounded-lg border border-blue-700/10 bg-blue-400/20 dark:border-sky-500 dark:bg-sky-600/50"
      >
        <div
          class="grid place-content-center h-40 w-72 text-xl font-semibold text-blue-600 dark:text-sky-100"
          v-text="transitionType"
        />
      </div>
    </component>
  </div>

  <transition-duration>
    <button
      class="grow rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0 disabled:opacity-75 disabled:pointer-events-none"
      type="button"
      :disabled="state.inProgress"
      @click="state.shown = !state.shown"
    >
      Toggle
    </button>
  </transition-duration>
</template>

<script setup lang="ts">
import TransitionDuration from './TransitionDuration.vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { options, state } from '../composables/options'

const { transitionType } = injectStrict(TransitionInfoKey)

defineOptions({ inheritAttrs: false })
</script>
