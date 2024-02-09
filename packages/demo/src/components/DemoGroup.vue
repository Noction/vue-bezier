<template>
  <div class="size-full overflow-y-auto">
    <component
      :is="transitionType"
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
      group
      class="flex flex-wrap gap-4"
    >
      <template v-for="item in items" :key="item">
        <div
          class="relative group  select-none rounded-lg border border-blue-700/10 bg-blue-400/20 text-blue-600 dark:border-sky-500 dark:bg-sky-600/50 dark:text-sky-100"
          :class="colors[item % colors.length]"
        >
          <div class="grid place-content-center size-20 cursor-default text-xl font-semibold" v-text="item" />
          <div
            class="absolute inset-0 size-full flex items-center justify-center cursor-pointer p-2"
            @click="remove(item)"
          >
            <div
              class="size-10 flex justify-center scale-0 rounded-full bg-current shadow transition group-hover:shadow-current group-hover:scale-100 dark:bg-sky-100"
            >
              <span class="text-white text-4xl leading-none font-light">-</span>
            </div>
          </div>
        </div>
      </template>
    </component>
  </div>

  <transition-duration>
    <button
      class="grow rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm text-sky-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-sky-600 dark:bg-sky-500 dark:text-white md:grow-0"
      @click="insert"
    >
      Insert
    </button>
    <div class="flex gap-x-3">
      <button
        class="grow rounded-full border border-pink-200 bg-pink-100 px-4 py-1.5 text-sm text-pink-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-pink-600 dark:bg-pink-500 dark:text-white md:grow-0"
        @click="reset"
      >
        Reset
      </button>
      <button
        class="grow rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-sm text-emerald-500 shadow-sm shadow-transparent transition hover:shadow-current dark:border-emerald-600 dark:bg-emerald-500 dark:text-white md:grow-0"
        @click="shuffle"
      >
        Shuffle
      </button>
    </div>
  </transition-duration>
</template>

<script setup lang="ts">
import TransitionDuration from './TransitionDuration.vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { options } from '../composables/options'
import { ref } from 'vue'

defineOptions({ inheritAttrs: false })

const { transitionType } = injectStrict(TransitionInfoKey)

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

function shuffleArray (array: number[]): number[] {
  return array.sort(() => Math.random() - 0.5)
}

function insert () {
  const i = Math.round(Math.random() * items.value.length)

  items.value.splice(i, 0, id++)
}

function reset () {
  items.value = getInitialItems()
}

function shuffle () {
  items.value = shuffleArray(items.value)
}

function remove (item: number) {
  const i = items.value.indexOf(item)

  if (i > -1) items.value.splice(i, 1)
}
</script>
