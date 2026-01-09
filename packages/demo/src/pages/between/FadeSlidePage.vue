<script setup lang="ts">
import { options, state } from '@/composables/options'
</script>

<template>
  <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
    <FadeSlideTransition
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
    >
      <div
        v-if="state.shown"
        class="grid place-content-center rounded-lg border border-blue-200 h-40 w-full bg-blue-100 dark:border-sky-500 dark:bg-sky-950"
      >
        <div
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
        >
          FadeSlideTransition A
        </div>
      </div>

      <div
        v-else
        class="grid place-content-center rounded-lg border border-green-200 h-40 w-full bg-green-100 dark:border-blue-500 dark:bg-blue-950"
      >
        <div
          class="text-xl font-semibold text-green-600 dark:text-blue-100"
        >
          FadeSlideTransition b
        </div>
      </div>
    </FadeSlideTransition>
  </div>
</template>
