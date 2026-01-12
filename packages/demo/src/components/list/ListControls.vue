<script setup lang="ts">
import TransitionDuration from '@/components/TransitionDuration.vue'
import { useListItems } from '@/composables/useListItems'

const { insert, reset, shuffle } = useListItems()
</script>

<template>
  <div class="controls flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-4">
      <button
        class="w-full rounded-full border border-yellow-200 bg-yellow-100 dark:border-yellow-700 dark:bg-yellow-600 px-4 py-1.5 text-sm text-yellow-600 shadow-sm shadow-transparent transition hover:shadow-current dark:border-yellow-600 dark:bg-yellow-600 dark:text-white"
        @click="insert"
      >
        Insert
      </button>
      <div class="flex gap-x-3">
        <button
          class="grow rounded-full border border-pink-200 bg-pink-100 dark:border-pink-700 dark:bg-pink-600 px-4 py-1.5 text-sm text-pink-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-pink-600 dark:bg-pink-500 dark:text-white"
          @click="reset"
        >
          Reset
        </button>
        <button
          class="grow rounded-full border border-emerald-200 bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-600 px-4 py-1.5 text-sm text-emerald-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-emerald-600 dark:bg-emerald-500 dark:text-white"
          @click="shuffle"
        >
          Shuffle
        </button>
      </div>
    </div>
    <TransitionDuration />
  </div>
</template>
