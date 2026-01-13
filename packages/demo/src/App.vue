<script setup lang="ts">
import type { Ref } from 'vue'
import type { TransitionsList } from '../types/transitionBundle'
import type { TransitionGroup, TransitionType } from '../types/transitionInfo'
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import { TransitionBundleKey, TransitionInfoKey } from '../types/symbols'
import NavBar from './components/NavBar.vue'
import SetupCode from './components/SetupCode.vue'
import UsageCode from './components/UsageCode.vue'

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

const showSetup = ref(false)
</script>

<template>
  <div class="h-screen antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col overflow-hidden">
    <NavBar />

    <DissolveTransition :duration="300">
      <aside
        v-if="showSetup"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="showSetup = false"
      >
        <article
          class="border-2 border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 shadow-2xl max-h-[80vh] overflow-auto w-full max-w-4xl"
          @click.stop
        >
          <SetupCode />
        </article>
      </aside>
    </DissolveTransition>

    <main class="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center gap-4 min-h-0">
      <!-- Main Demo Area -->
      <section class="border p-4 border-slate-200 dark:border-slate-700 rounded-lg h-[500px] flex flex-col lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr_200px] gap-4 overflow-hidden">
        <SectionNav />

        <!-- Mobile: nav + demo + controls stacked -->
        <div class="flex-1 flex flex-col lg:hidden min-h-0 gap-4">
          <div class="overflow-y-auto min-h-0">
            <RouterView name="nav" />
          </div>
          <div class="flex-1 flex items-center justify-center min-h-0">
            <RouterView />
          </div>
          <div class="overflow-y-auto max-h-48">
            <RouterView name="controls" />
          </div>
        </div>

        <!-- Desktop: left nav + demo + controls -->
        <div class="hidden lg:flex flex-col justify-between min-h-0">
          <div class="overflow-y-auto min-h-0 flex-1 pr-4">
            <RouterView name="nav" />
          </div>
          <button
            class="flex-shrink-0 mt-2 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
            @click="showSetup = !showSetup"
          >
            <i-lucide-package class="text-sm" />
            Setup
          </button>
        </div>
        <div class="hidden lg:block">
          <RouterView />
        </div>
        <div class="hidden lg:block">
          <RouterView name="controls" />
        </div>
      </section>

      <!-- Usage Code Section -->
      <section class="border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
        <UsageCode />
      </section>
    </main>
  </div>
</template>
