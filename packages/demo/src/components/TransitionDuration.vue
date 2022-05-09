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
      <span class="grow">Delay</span>
      <span class="text-center" v-text="transitionDelay" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number="transitionDelay"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="range grow"
      />
      <!-- ENTER -->
      <span class="grow">Enter</span>
      <span class="text-center" v-text="transitionDuration.enter" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number="transitionDuration.enter"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="grow"
      />
      <!-- LEAVE -->
      <span class="grow">Leave</span>
      <span class="text-center" v-text="transitionDuration.leave" />
      <span>ms</span>
      <input
        id="myRange"
        v-model.number="transitionDuration.leave"
        type="range"
        min="0"
        max="3000"
        step="100"
        class="grow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'

const { transitionDelay, transitionDuration } = injectStrict(TransitionInfoKey)
</script>

<style scoped>
.operations {
  grid: 1fr 1fr 1fr / auto 30px auto 1fr;
}
</style>
