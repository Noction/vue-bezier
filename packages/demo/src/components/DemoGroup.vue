<template>
  <div class="flex h-full items-center overflow-y-auto">
    <component
      :is="transitionType"
      :duration="transitionDuration"
      :delay="transitionDelay"
      group
      class="flex flex-wrap gap-4"
    >
      <template v-for="item in items" :key="item">
        <div
          class="relative flex h-20 w-20 flex-col items-center justify-center rounded-lg border border-blue-700/10 bg-blue-400/20 text-blue-600 dark:border-sky-500 dark:bg-sky-600/50 dark:text-sky-100"
          :class="colors[item % colors.length]"
        >
          <span class="cursor-default text-xl font-semibold" v-text="item" />
          <div
            class="group absolute top-0 right-0 cursor-pointer p-2"
            @click="remove(item)"
          >
            <div
              class="h-2 w-2 rounded-full bg-current shadow transition group-hover:shadow-current dark:bg-sky-100"
            />
          </div>
        </div>
      </template>
    </component>
  </div>
  <div class="flex w-full justify-between gap-x-3 bg-white px-6 py-4 shadow">
    <div class="flex justify-center space-x-3">
      <button
        class="h-10 rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
        @click="insert"
      >
        insert
      </button>
      <button
        class="h-10 rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
        @click="reset"
      >
        reset
      </button>
      <button
        class="h-10 rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
        @click="shuffle"
      >
        shuffle
      </button>
    </div>
    <transition-duration />
  </div>
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

const { transitionDelay, transitionDuration, transitionType } =
  injectStrict(TransitionInfoKey)

const colors = [
  'border-blue-700/10 bg-blue-400/20 text-blue-600',
  'border-cyan-700/10 bg-cyan-400/20 text-cyan-600',
  'border-pink-700/10 bg-pink-400/20 text-pink-600',
  'border-emerald-700/10 bg-emerald-400/20 text-emerald-600',
  'border-indigo-700/10 bg-indigo-400/20 text-indigo-600',
  'border-purple-700/10 bg-purple-400/20 text-purple-600',
  'border-yellow-700/10 bg-yellow-400/20 text-yellow-600'
]

const getInitialItems = () => [0, 1, 2, 3, 4, 5]
const items = ref(getInitialItems())

let id = items.value.length + 1

function shuffleArray(array: number[]): number[] {
  return array.sort(() => Math.random() - 0.5)
}

function insert() {
  const i = Math.round(Math.random() * items.value.length)

  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function shuffle() {
  items.value = shuffleArray(items.value)
}

function remove(item: number) {
  const i = items.value.indexOf(item)

  if (i > -1) items.value.splice(i, 1)
}
</script>
