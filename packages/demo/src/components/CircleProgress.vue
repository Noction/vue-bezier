<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    class="circle-progress"
  >
    <path
      ref="statePath"
      :style="{
        transitionDelay: progressType === 'delay' ? null : `${delayTime}ms`,
        transitionDuration: `${durationTime}ms`
      }"
      d="m 4 12 l 5 5 l 10 -10"
      :stroke-dasharray="dasharray"
      :stroke-dashoffset="dashoffset"
      fill="none"
      class="stroke-2 transition-all"
      :class="[
        !animationEnabled ? 'transition-none' : null,
        classType
      ]"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { options, state } from '../composables/options'

interface Props {
  progressType?: string
}

const { progressType = 'enter' } = defineProps<Props>()
const statePath = ref<SVGPathElement>()
const dasharray = ref(0)
const animationEnabled = ref(false)
const toggle = computed(() => progressType !== 'leave' ? state.shown : !state.shown)
const progress = computed(() => toggle.value ? 1 : 0)
const dashoffset = computed(() => (1 - progress.value) * dasharray.value)

watch(statePath, () => {
  dasharray.value = statePath.value?.getTotalLength?.() ?? 21.21
})

watch(() => state.shown, () => {
  animationEnabled.value = true
})

const classType = computed(() => {
  if (progressType === 'leave') return 'stroke-pink-500'
  else if (progressType === 'delay') return 'stroke-yellow-500'
  else return 'stroke-emerald-500'
})

const delayTime = computed(() => { return options.delay })

const durationTime = computed(() => {
  if (progressType === 'delay') return options.delay
  else if (!state.shown) return options.leave
  else return options.enter
})

</script>
