import { reactive, ref } from 'vue'

export const options = reactive({
  delay: 0,
  enter: 300,
  leave: 300,
})

export const state = reactive({
  shown: true,
})

export function useTransitionOptions() {
  const options = reactive({
    delay: 0,
    enter: 300,
    leave: 300,
  })

  const visible = ref(true)

  return {
    options,
    visible,
  }
}
