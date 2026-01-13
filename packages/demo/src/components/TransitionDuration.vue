<script setup lang="ts">
import { options } from '../composables/options'
import CircleProgress from './CircleProgress.vue'
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-between gap-5 bg-white dark:bg-slate-900 sm:flex-row"
  >
    <slot />

    <!-- Mobile: horizontal layout -->
    <div class="lg:hidden flex gap-3 w-full text-xs font-semibold text-slate-700 dark:text-slate-300">
      <div class="flex flex-col gap-1 flex-1">
        <div class="flex items-center gap-1">
          <CircleProgress progress-type="delay" class="w-4 h-4" />
          <span class="text-xs">Delay</span>
        </div>
        <input
          v-model.number.lazy="options.delay"
          type="number"
          name="transition-delay"
          min="0"
          max="1000"
          step="100"
          class="w-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1.5 rounded border border-transparent dark:border-slate-700 text-xs text-center"
        >
      </div>
      <div class="flex flex-col gap-1 flex-1">
        <div class="flex items-center gap-1">
          <CircleProgress progress-type="enter" class="w-4 h-4" />
          <span class="text-xs">Enter</span>
        </div>
        <input
          v-model.number.lazy="options.enter"
          type="number"
          name="transition-enter"
          min="0"
          max="1000"
          step="100"
          class="w-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1.5 rounded border border-transparent dark:border-slate-700 text-xs text-center"
        >
      </div>
      <div class="flex flex-col gap-1 flex-1">
        <div class="flex items-center gap-1">
          <CircleProgress progress-type="leave" class="w-4 h-4" />
          <span class="text-xs">Leave</span>
        </div>
        <input
          v-model.number.lazy="options.leave"
          type="number"
          name="transition-leave"
          min="0"
          max="1000"
          step="100"
          class="w-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1.5 rounded border border-transparent dark:border-slate-700 text-xs text-center"
        >
      </div>
    </div>

    <!-- Desktop: grid layout -->
    <div
      class="hidden lg:grid operations items-center w-full gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
    >
      <!-- DELAY -->
      <CircleProgress progress-type="delay" />
      <span class="grow">Delay</span>
      <input
        v-model.number.lazy="options.delay"
        type="number"
        name="transition-delay-desktop"
        min="0"
        max="1000"
        step="100"
        class="range grow bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-transparent dark:border-slate-700"
      >
      <!-- ENTER -->
      <CircleProgress progress-type="enter" />
      <span class="grow">Enter</span>
      <input
        v-model.number.lazy="options.enter"
        type="number"
        name="transition-enter-desktop"
        min="0"
        max="1000"
        step="100"
        class="range grow bg-gray-100 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-transparent dark:border-slate-700"
      >
      <!-- LEAVE -->
      <CircleProgress progress-type="leave" />
      <span class="grow">Leave</span>
      <input
        v-model.number.lazy="options.leave"
        type="number"
        name="transition-leave-desktop"
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
