<script setup lang="ts">
import type { TransitionType } from '../../../types/transitionInfo'
import { watch } from 'vue'
import { options } from '@/composables/options'
import { useListItems } from '@/composables/useListItems'
import { TransitionInfoKey } from '../../../types/symbols'
import { injectStrict } from '../../../utils'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  component: string
}>()

const { transitionType } = injectStrict(TransitionInfoKey)

watch(() => props.component, (newComponent) => {
  transitionType.value = newComponent as TransitionType
}, { immediate: true })

const colors = [
  'border-blue-200 bg-blue-100 text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400',
  'border-cyan-200 bg-cyan-100 text-cyan-600 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-400',
  'border-pink-200 bg-pink-100 text-pink-600 dark:border-pink-800 dark:bg-pink-950 dark:text-pink-400',
  'border-emerald-200 bg-emerald-100 text-emerald-600 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400',
  'border-indigo-200 bg-indigo-100 text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-400',
  'border-purple-200 bg-purple-100 text-purple-600 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-400',
  'border-yellow-200 bg-yellow-100 text-yellow-600 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-400',
]

const { items, remove } = useListItems()
</script>

<template>
  <component
    :is="component"
    :duration="{ enter: options.enter, leave: options.leave }"
    :delay="options.delay"
    tag="div"
    class="flex flex-wrap gap-4"
  >
    <div
      v-for="item in items"
      :key="item"
      class="relative group select-none rounded-lg border"
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
  </component>
</template>
