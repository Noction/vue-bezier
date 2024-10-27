<script setup lang="ts">
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import DemoGroup from './DemoGroup.vue'
import DemoSingle from './DemoSingle.vue'

const { transitionGroup } = injectStrict(TransitionInfoKey)
</script>

<template>
  <div id="preview" class="flex items-center gap-x-4">
    <div
      class="flex h-3/4 w-full flex-col content-center items-center justify-center gap-y-4 rounded-xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/25 lg:h-1/2"
    >
      <div class="ml-auto grid grid-flow-col items-end justify-center gap-x-8">
        <div
          class="group flex w-10 cursor-pointer flex-col items-center justify-center gap-y-2"
          @click="transitionGroup = false"
        >
          <span
            class="transition-scale square mb-1 h-8 w-8 rounded border border-sky-700/10 bg-sky-400/20 duration-500 group-hover:scale-75 dark:border-0 dark:bg-blue-900/70"
          />
          <span
            class="text-sm transition-all group-hover:font-semibold group-hover:text-sky-500 group-hover:dark:text-sky-400 md:text-base"
            :class="{ 'text-sky-500 dark:text-sky-400': !transitionGroup }"
          >
            Single
          </span>
        </div>
        <div
          class="group flex w-10 cursor-pointer flex-col items-center justify-center gap-y-2"
          @click="transitionGroup = true"
        >
          <div class="group relative h-10 w-10 transition-all">
            <span
              class="square absolute left-0 bottom-0 z-0 h-7 w-7 rounded border border-sky-700/10 bg-sky-400/20 transition-all duration-500 group-hover:left-3 group-hover:bottom-3 dark:border-0 dark:bg-blue-900/70"
            />
            <span
              class="square absolute right-0 top-0 z-10 h-7 w-7 rounded border border-sky-700/10 bg-sky-400/20 transition-all duration-500 group-hover:right-3 group-hover:top-3 dark:border-0 dark:bg-blue-400/20"
            />
          </div>
          <span
            class="text-sm transition-all group-hover:font-semibold group-hover:text-sky-500 group-hover:dark:text-sky-400 md:text-base"
            :class="{
              'text-sky-500 dark:text-sky-400': transitionGroup,
            }"
          >
            Group
          </span>
        </div>
      </div>
      <DemoGroup v-if="transitionGroup" class="w-full" />
      <DemoSingle v-else class="w-full" />
    </div>
  </div>
</template>
