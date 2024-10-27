<script setup lang="ts">
import type { Ref } from 'vue'
import type { TransitionsList } from '../types/transitionBundle'
import type { TransitionGroup, TransitionType } from '../types/transitionInfo'
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import { TransitionBundleKey, TransitionInfoKey } from '../types/symbols'
import NavBar from './components/NavBar.vue'

const transitionGroup: Ref<TransitionGroup> = ref(false)
const transitionType: Ref<TransitionType> = ref('FadeTransition')
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
</script>

<template>
  <div class="min-h-screen antialiased">
    <NavBar />
    <!-- <div class="row-start-2 row-end-3 lg:col-span-2 xl:col-span-2" /> -->
    <!-- <TransitionsOptions
      class="row-start-2 row-end-3 lg:col-span-2 xl:col-span-2"
      @selected="transitionType = $event"
    /> -->

    <div class="flex items-center min-h-screen xl:max-w-5xl max-w-none mx-auto px-4 sm:px-6 md:px-8 ">
      <div class="border w-full h-[500px] grid grid-rows-[auto_1fr] gap-y-4 overflow-hidden">
        <nav class="flex w-full justify-center gap-x-8">
          <router-link to="/">
            Appear
          </router-link>
          <router-link to="/between">
            Between
          </router-link>
          <router-link to="/list">
            List
          </router-link>
        </nav>
        <RouterView />
      </div>
    </div>

    <!-- <DemoTransition
      class="col-span-full px-8 lg:col-span-8 lg:row-start-2 lg:row-end-3 xl:col-span-5 xl:px-0"
      :type="transitionType"
    /> -->
    <!--    <button -->
    <!--      class="absolute top-32 -right-5 hidden -rotate-90 rounded border-t border-l border-r px-4 py-2 lg:block xl:hidden" -->
    <!--      @click="show = !show" -->
    <!--    > -->
    <!--      CODE -->
    <!--    </button> -->
    <!-- <DemoCode class="col-span-3 row-start-1 row-end-3" :shown="show" /> -->
  </div>
</template>
