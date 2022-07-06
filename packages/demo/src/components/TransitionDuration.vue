<template>
  <div
    class="flex w-full flex-col items-center justify-between gap-5 bg-white px-4 py-4 shadow sm:flex-row md:px-6"
  >
    <div
      class="flex grow items-stretch justify-center gap-3 text-sm font-semibold text-white sm:flex-col md:text-base"
    >
      <slot />
    </div>
    <div
      class="operations grid w-full gap-2 text-xs font-semibold text-slate-700"
    >
      <!-- DELAY -->
      <circle-progress progress-type="delay" />
      <span class="grow">Delay</span>
      <span class="text-center" v-text="options.delay" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number.lazy="options.delay"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="range grow"
      >
      <!-- ENTER -->
      <circle-progress progress-type="enter" />
      <span class="grow">Enter</span>
      <span class="text-center" v-text="options.enter" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number.lazy="options.enter"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="grow"
      >
      <!-- LEAVE -->
      <circle-progress progress-type="leave" />
      <span class="grow">Leave</span>
      <span class="text-center" v-text="options.leave" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number.lazy="options.leave"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="grow"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import CircleProgress from './CircleProgress.vue'
import { options } from '../composables/options'
</script>

<style scoped>
  .operations { grid: 1fr 1fr 1fr / 16px auto 30px auto 1fr; }
</style>
