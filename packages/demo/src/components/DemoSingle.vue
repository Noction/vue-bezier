<template>
  <div class="flex h-full items-center">
    <component
      :is="transitionType"
      :duration="transitionDuration"
      :delay="transitionDelay"
    >
      <div
        v-if="show"
        class="flex h-40 w-72 flex-col items-center justify-center rounded-lg border border-blue-700/10 bg-blue-400/20 dark:border-sky-500 dark:bg-sky-600/50"
      >
        <span
          class="text-xl font-semibold text-blue-600 dark:text-sky-100"
          v-text="transitionType"
        />
      </div>
    </component>
  </div>

  <transition-duration>
    <button
      class="grow rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0"
      type="button"
      @click="show = !show"
    >
      Toggle
    </button>
  </transition-duration>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import TransitionDuration from './TransitionDuration.vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { ref } from 'vue'

const { transitionDelay, transitionType, transitionDuration } =
  injectStrict(TransitionInfoKey)

const show = ref(true)
</script>
