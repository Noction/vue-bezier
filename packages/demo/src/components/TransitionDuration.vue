<script setup lang="ts">
import { useTransitionOptions } from '../composables/options'
import CircleProgress from './CircleProgress.vue'

const { options } = useTransitionOptions()
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-between gap-5 bg-white dark:bg-slate-900 sm:flex-row"
  >
    <slot />

    <div
      class="operations items-center grid w-full gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
    >
      <!-- DELAY -->
      <CircleProgress progress-type="delay" />
      <span class="grow">Delay</span>
      <input
        id="myRange"
        v-model.number.lazy="options.delay"
        type="number"
        min="0"
        max="1000"
        step="100"
        class="range grow bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-transparent dark:border-slate-700"
      >
      <!-- ENTER -->
      <CircleProgress progress-type="enter" />
      <span class="grow">Enter</span>
      <input
        id="myRange"
        v-model.number.lazy="options.enter"
        type="number"
        min="0"
        max="1000"
        step="100"
        class="range grow bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-transparent dark:border-slate-700"
      >
      <!-- LEAVE -->
      <CircleProgress progress-type="leave" />
      <span class="grow">Leave</span>
      <input
        id="myRange"
        v-model.number.lazy="options.leave"
        type="number"
        min="0"
        max="1000"
        step="100"
        class="range grow bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-transparent dark:border-slate-700"
      >
    </div>
  </div>
</template>

<style scoped>
  .operations { grid: 1fr 1fr 1fr / 16px auto 1fr; }
</style>
