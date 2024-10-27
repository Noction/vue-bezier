import { reactive } from 'vue'

export const options = reactive({
  delay: 0,
  enter: 300,
  leave: 300,
})

export const state = reactive({
  shown: true,
})
