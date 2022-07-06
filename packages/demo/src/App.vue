<template>
  <div class="layout grid min-h-screen grid-cols-10 gap-x-8 antialiased">
    <div class="relative col-span-10 row-span-1 xl:col-span-7">
      <nav-bar />
    </div>
    <transitions-options
      class="row-start-2 row-end-3 lg:col-span-2 xl:col-span-2"
      @selected="transitionType = $event"
    />
    <demo-transition
      class="col-span-full px-8 lg:col-span-8 lg:row-start-2 lg:row-end-3 xl:col-span-5 xl:px-0"
      :type="transitionType"
    />
    <!--    <button -->
    <!--      class="absolute top-32 -right-5 hidden -rotate-90 rounded border-t border-l border-r px-4 py-2 lg:block xl:hidden" -->
    <!--      @click="show = !show" -->
    <!--    > -->
    <!--      CODE -->
    <!--    </button> -->
    <demo-code class="col-span-3 row-start-1 row-end-3" :shown="show" />
  </div>
</template>

<script setup lang="ts">
import DemoCode from './components/DemoCode.vue'
import DemoTransition from './components/DemoTransition.vue'
import NavBar from './components/NavBar.vue'
import { TransitionsList } from '../types/transitionBundle'
import TransitionsOptions from './components/TransitionsOptions.vue'
import { Ref, provide, ref } from 'vue'
import { TransitionBundleKey, TransitionInfoKey } from '../types/symbols'
import { TransitionGroup, TransitionType } from '../types/transitionInfo'

const show: Ref<boolean> = ref(false)
const transitionGroup: Ref<TransitionGroup> = ref(false)
const transitionType: Ref<TransitionType> = ref('FadeTransition')
const transitionsList: TransitionsList = ref([])

provide(TransitionInfoKey, {
  transitionGroup,
  transitionType
})

provide(TransitionBundleKey, {
  addTransition: (el: TransitionType) => {
    transitionsList.value.push(el)
  },
  removeTransition: (el: TransitionType) => {
    const index = transitionsList.value.findIndex(e => e === el)

    transitionsList.value.splice(index, 1)
  },
  transitionsList
})

</script>

<style lang="scss">
  .layout {
    grid-template-rows: auto 1fr;

    @media (max-width: 1024px) {
      grid-template-rows: 80px auto 1fr;
    }
  }
</style>
