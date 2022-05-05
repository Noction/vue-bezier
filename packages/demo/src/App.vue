<template>
  <div class="grid min-h-screen grid-cols-10 gap-4 antialiased">
    <transitions-options
      class="col-span-2"
      @selected="transitionType = $event"
    />
    <demo-transition class="col-span-5" :type="transitionType" />
    <demo-code class="col-span-3" :type="transitionType" />
  </div>
</template>

<script setup lang="ts">
import DemoCode from './components/DemoCode.vue'
import DemoTransition from './components/DemoTransition.vue'
import { TransitionsList } from '../types/transitionBundle'
import TransitionsOptions from './components/TransitionsOptions.vue'
import { Ref, provide, ref } from 'vue'
import {
  TransitionBundleKey,
  TransitionDurationOperationKey,
  TransitionInfoKey
} from '../types/symbols'
import {
  TransitionDelay,
  TransitionDuration,
  TransitionGroup,
  TransitionType
} from '../types/transitionInfo'

const transitionDelay: Ref<TransitionDelay> = ref(0)
const transitionDuration: Ref<TransitionDuration> = ref({
  enter: 300,
  leave: 300
})
const transitionGroup: Ref<TransitionGroup> = ref(false)
const transitionType: Ref<TransitionType> = ref('FadeTransition')
const transitionsList: TransitionsList = ref([])

provide(TransitionInfoKey, {
  transitionDelay,
  transitionDuration,
  transitionGroup,
  transitionType
})

provide(TransitionBundleKey, {
  addTransition: (el: TransitionType) => {
    transitionsList.value.push(el)
  },
  removeTransition: (el: TransitionType) => {
    const index = transitionsList.value.findIndex((e) => e === el)

    transitionsList.value.splice(index, 1)
  },
  transitionsList
})

provide(TransitionDurationOperationKey, {
  decrementDelay: () => {
    if (transitionDelay.value > 0) transitionDelay.value -= 100
  },
  decrementEnter: () => {
    if (transitionDuration.value.enter > 0)
      transitionDuration.value.enter -= 100
  },
  decrementLeave: () => {
    if (transitionDuration.value.leave > 0)
      transitionDuration.value.leave -= 100
  },
  incrementDelay: () => {
    transitionDelay.value = transitionDelay.value + 100
  },
  incrementEnter: () => {
    transitionDuration.value.enter = transitionDuration.value.enter + 100
  },
  incrementLeave: () => {
    transitionDuration.value.leave = transitionDuration.value.leave + 100
  }
})
</script>
