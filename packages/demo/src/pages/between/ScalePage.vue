<script setup lang="ts">
import { options, state } from '@/composables/options'
</script>

<template>
  <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
    <ScaleTransition
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
      origin="center"
    >
      <div
        v-if="state.shown"
        class="grid place-content-center rounded-lg border border-blue-700/10 h-40 w-full bg-blue-400/20 dark:border-sky-500 dark:bg-sky-600/50"
      >
        <div
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
        >
          ScaleTransition
        </div>
      </div>
      <div
        v-else
        class="grid place-content-center rounded-lg border border-pink-700/10 h-40 w-full bg-pink-400/20 dark:border-pink-500 dark:bg-pink-600/50"
      >
        <div
          class="text-xl font-semibold text-pink-600 dark:text-pink-100"
        >
          ScaleTransition
        </div>
      </div>
    </ScaleTransition>
  </div>
</template>
