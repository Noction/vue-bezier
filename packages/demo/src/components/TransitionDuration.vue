<template>
  <div class="flex items-center space-x-3">
    <div
      class="group relative rounded-lg px-3 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
    >
      <span
        class="absolute left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:-translate-y-4 group-hover:opacity-100"
        >Delay</span
      >
      <button class="scale-110 py-2 pr-3" @click="decrementDelay">-</button>
      <span class="bg-white px-4 py-2 font-medium" v-text="transitionDelay" />
      <button class="scale-110 py-2 pl-3" @click="incrementDelay">+</button>
      <span
        class="absolute bottom-0 left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:translate-y-4 group-hover:opacity-100"
        >ms</span
      >
    </div>
    <div
      class="group relative rounded-lg px-3 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
    >
      <span
        class="absolute left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:-translate-y-4 group-hover:opacity-100"
        >Enter</span
      >
      <button class="scale-110 py-2 pr-3" @click="decrementEnter">-</button>
      <span
        class="bg-white px-4 py-2 font-medium"
        v-text="transitionDuration.enter"
      />
      <button class="scale-110 py-2 pl-3" @click="incrementEnter">+</button>
      <span
        class="absolute bottom-0 left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:translate-y-4 group-hover:opacity-100"
        >ms</span
      >
    </div>
    <div
      class="group relative rounded-lg px-3 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
    >
      <span
        class="absolute left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:-translate-y-4 group-hover:opacity-100"
        >Leave</span
      >
      <button class="scale-110 py-2 pr-3" @click="decrementLeave">-</button>
      <span
        class="bg-white px-4 py-2 font-medium"
        v-text="transitionDuration.leave"
      />
      <button class="scale-110 py-2 pl-3" @click="incrementLeave">+</button>
      <span
        class="absolute bottom-0 left-0 w-full translate-y-0 text-center text-xs font-semibold opacity-0 transition-all group-hover:translate-y-4 group-hover:opacity-100"
        >ms</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { injectStrict } from '../../utils'
import {
  TransitionDurationOperationKey,
  TransitionInfoKey
} from '../../types/symbols'

const { transitionDelay, transitionDuration } = injectStrict(TransitionInfoKey)
const {
  decrementEnter,
  incrementEnter,
  decrementLeave,
  incrementLeave,
  decrementDelay,
  incrementDelay
} = injectStrict(TransitionDurationOperationKey)
</script>
