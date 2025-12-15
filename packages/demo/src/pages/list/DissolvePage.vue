<script setup lang="ts">
import { useListItems } from '@/composables/useListItems'
import { options } from '@/composables/options'

defineOptions({ inheritAttrs: false })

const colors = [
  'border-blue-700/10 bg-blue-400/20 text-blue-600 dark:border-blue-500/20 dark:bg-blue-600/30 dark:text-blue-400',
  'border-cyan-700/10 bg-cyan-400/20 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-600/30 dark:text-cyan-400',
  'border-pink-700/10 bg-pink-400/20 text-pink-600 dark:border-pink-500/20 dark:bg-pink-600/30 dark:text-pink-400',
  'border-emerald-700/10 bg-emerald-400/20 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-600/30 dark:text-emerald-400',
  'border-indigo-700/10 bg-indigo-400/20 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-600/30 dark:text-indigo-400',
  'border-purple-700/10 bg-purple-400/20 text-purple-600 dark:border-purple-500/20 dark:bg-purple-600/30 dark:text-purple-400',
  'border-yellow-700/10 bg-yellow-400/20 text-yellow-600 dark:border-yellow-500/20 dark:bg-yellow-600/30 dark:text-yellow-400',
]

const { items, remove } = useListItems()
</script>

<template>
  <div class="size-full max-h-[350px] overflow-y-auto">
    <DissolveListTransition
      :duration="{ enter: options.enter, leave: options.leave }"
      :delay="options.delay"
      tag="div"
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
              class="size-10 flex justify-center scale-0 opacity-0 rounded-full bg-current shadow transition group-hover:shadow-current group-hover:scale-100 group-hover:opacity-100"
            >
              <span class="text-white text-4xl leading-none font-light">-</span>
            </div>
          </div>
        </div>
      </template>
    </DissolveListTransition>
  </div>
</template>
