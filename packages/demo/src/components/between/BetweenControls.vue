<script setup lang="ts">
import TransitionDuration from '@/components/TransitionDuration.vue'
import { state } from '@/composables/options'
</script>

<template>
  <div class="controls">
    <div class="p-7">
      <button
        class="w-full rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-sm text-emerald-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-emerald-600 dark:bg-emerald-500 dark:text-white md:grow-0 disabled:opacity-75 disabled:pointer-events-none"
        type="button"
        @click="state.shown = !state.shown"
      >
        Toggle
      </button>
    </div>
    <TransitionDuration />
  </div>
</template>
