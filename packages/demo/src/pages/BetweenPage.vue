<script setup lang="ts">
import TransitionDuration from '@/components/TransitionDuration.vue'
import { state } from '@/composables/options'
</script>

<template>
  <div class="wrapper grid mx-4 gap-5 grid-cols-[200px_1fr_200px]">
    <nav class="flex flex-col items-end justify-center gap-x-8">
      <router-link to="/between/dissolve" active-class="text-emerald-500">
        Dissolve
      </router-link>
      <router-link to="/between/fade" active-class="text-emerald-500">
        Fade
      </router-link>
      <router-link to="/between/push" active-class="text-emerald-500">
        Push
      </router-link>
      <router-link to="/between/fade-slide" active-class="text-emerald-500">
        Fade Slide
      </router-link>
      <router-link to="/between/blur" active-class="text-emerald-500">
        Blur
      </router-link>
      <router-link to="/between/scale" active-class="text-emerald-500">
        Scale
      </router-link>
      <router-link to="/between/zoom" active-class="text-emerald-500">
        Zoom
      </router-link>
      <router-link to="/between/wipe" active-class="text-emerald-500">
        Wipe
      </router-link>
      <router-link to="/between/rotate" active-class="text-emerald-500">
        Rotate
      </router-link>
      <router-link to="/between/clip-path" active-class="text-emerald-500">
        Clip Path
      </router-link>
    </nav>

    <div class="relative w-full h-full max-w-72 max-h-48 m-auto">
      <router-view />
    </div>

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
  </div>
</template>
