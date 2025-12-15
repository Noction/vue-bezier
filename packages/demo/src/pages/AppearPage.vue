<script setup lang="ts">
import TransitionDuration from '@/components/TransitionDuration.vue'
import { state } from '@/composables/options'
</script>

<template>
  <div class="wrapper grid mx-4 gap-5 grid-cols-[200px_1fr_200px]">
    <nav class="flex flex-col items-end justify-center gap-x-8">
      <router-link to="/appear/dissolve" active-class="text-sky-500">
        Dissolve
      </router-link>
      <router-link to="/appear/fade" active-class="text-sky-500">
        Fade
      </router-link>
      <router-link to="/appear/push" active-class="text-sky-500">
        Push
      </router-link>
      <router-link to="/appear/fade-slide" active-class="text-sky-500">
        FadeSlide
      </router-link>
      <router-link to="/appear/blur" active-class="text-sky-500">
        Blur
      </router-link>
      <router-link to="/appear/scale" active-class="text-sky-500">
        Scale
      </router-link>
    </nav>

    <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
      <router-view />
    </div>

    <div class="controls">
      <div class="p-7">
        <button
          class="w-full rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0 disabled:opacity-75 disabled:pointer-events-none"
          type="button"
          @click="state.shown = !state.shown"
        >
          Toggle
        </button>
      </div>
      <TransitionDuration />
    </div>
  </div>
</template>
