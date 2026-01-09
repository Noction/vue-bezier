<script setup lang="ts">
import { options, state } from '@/composables/options'
</script>

<template>
  <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
    <BlurTransition
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
    >
      <div
        v-if="state.shown"
        class="grid place-content-center rounded-lg border  h-40 w-full border-sky-200 bg-sky-100 dark:border-sky-800 dark:bg-sky-950"
      >
        <div
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
        >
          BlurTransition
        </div>
      </div>
    </BlurTransition>
  </div>
</template>
