<script setup lang="ts">
import type { Ref } from 'vue'
import type { TransitionsList } from '../types/transitionBundle'
import type { TransitionGroup, TransitionType } from '../types/transitionInfo'
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import { TransitionBundleKey, TransitionInfoKey } from '../types/symbols'
import NavBar from './components/NavBar.vue'

const transitionGroup: Ref<TransitionGroup> = ref(false)
const transitionType: Ref<TransitionType> = ref('DissolveTransition')
const transitionsList: TransitionsList = ref([])

provide(TransitionInfoKey, {
  transitionGroup,
  transitionType,
})

provide(TransitionBundleKey, {
  addTransition: (el: TransitionType) => {
    transitionsList.value.push(el)
  },
  removeTransition: (el: TransitionType) => {
    const index = transitionsList.value.findIndex(e => e === el)

    transitionsList.value.splice(index, 1)
  },
  transitionsList,
})

const show = ref(false)
</script>

<template>
  <div class="min-h-screen antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <NavBar />

    <div class="flex items-center min-h-screen xl:max-w-5xl max-w-none mx-auto px-4 sm:px-6 md:px-8 ">
      <div class="border p-4 border-slate-200 dark:border-slate-700 rounded-lg w-full h-[500px] grid grid-rows-[auto_1fr] grid-cols-[200px_1fr_200px] gap-4 overflow-hidden">
        <nav class="col-span-3 flex w-full justify-center gap-x-8 font-semibold text-slate-600 dark:text-slate-300">
          <router-link
            to="/"
            class="flex gap-x-2 items-center py-2"
            active-class="text-sky-500 dark:text-sky-400"
          >
            <i-lucide-square-dashed-bottom />
            Appear
          </router-link>
          <router-link
            to="/between"
            class="flex gap-x-2 items-center"
            active-class="text-emerald-500 dark:text-emerald-400"
          >
            <i-lucide-squares-subtract />
            Between
          </router-link>
          <router-link
            to="/list"
            class="flex gap-x-2 items-center"
            active-class="text-yellow-500 dark:text-yellow-400"
          >
            <i-lucide-square-stack />
            List
          </router-link>
        </nav>
        <RouterView name="nav" />
        <RouterView />
        <RouterView name="controls" />
      </div>
      <!-- <DemoCode :shown="show" /> -->

      <button
        class="absolute top-32 -right-5 hidden -rotate-90 rounded border-t border-l border-r px-4 py-2 lg:block xl:hidden"
        @click="show = !show"
      >
        CODE
      </button>
    </div>
  </div>
</template>
