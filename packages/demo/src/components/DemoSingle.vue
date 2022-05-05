<template>
  <div class="flex h-full items-center">
    <component
      :is="transitionType"
      :duration="transitionDuration"
      :delay="transitionDelay"
    >
      <div
        v-if="show"
        class="flex h-40 w-72 flex-col items-center justify-center rounded-lg border border-blue-700/10 bg-blue-400/20 dark:border-sky-500 dark:bg-sky-600/50"
      >
        <span
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
          v-text="transitionType"
        />
      </div>
    </component>
  </div>
  <div class="flex w-full justify-between gap-x-3 bg-white px-6 py-4 shadow">
    <button
      class="h-10 h-10 rounded-lg px-6 px-6 px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
      type="button"
      @click="show = !show"
    >
      Toggle
    </button>
    <transition-duration />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import TransitionDuration from './TransitionDuration.vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { ref } from 'vue'

const { transitionDelay, transitionType, transitionDuration } =
  injectStrict(TransitionInfoKey)

const show = ref(true)
</script>
