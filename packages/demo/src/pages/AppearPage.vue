<script setup lang="ts">
import TransitionDuration from '@/components/TransitionDuration.vue'
import { state } from '@/composables/options'
</script>

<template>
  <div class="grid gap-5 grid-rows-[auto_1fr] items-center gap-x-4 rounded-xl">
    <TransitionDuration>
      <button
        class="grow rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0 disabled:opacity-75 disabled:pointer-events-none"
        type="button"
        @click="state.shown = !state.shown"
      >
        Toggle
      </button>
    </TransitionDuration>

    <div class="grid mx-4 gap-5 grid-cols-[200px_1fr] w-full h-full">
      <nav class="ml-auto flex flex-col items-end justify-center gap-x-8">
        <router-link to="/appear/dissolve">
          Dissolve
        </router-link>
        <router-link to="/appear/push">
          Push
        </router-link>
        <router-link to="/appear/fade-slide">
          FadeSlide
        </router-link>
        <router-link to="/appear/blur">
          Blur
        </router-link>
      </nav>

      <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>
