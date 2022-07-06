import { reactive, watch } from 'vue'

export const options = reactive({
  delay: 0,
  enter: 300,
  leave: 300
})
export const state = reactive({
  inProgress: false,
  shown: true
})

watch(() => state.shown, newVal => {
  const duration = options.delay + (newVal? options.enter : options.leave)

  state.inProgress = true

  setTimeout(() => state.inProgress = false, duration)
})
