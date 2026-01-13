import { ref } from 'vue'

const getInitialItems = () => [0, 1, 2, 3, 4, 5]
const items = ref(getInitialItems())

let id = items.value.length + 1

function shuffleArray(array: number[]): number[] {
  return array.sort(() => Math.random() - 0.5)
}

export function useListItems() {
  function insert() {
    const i = Math.round(Math.random() * items.value.length)
    items.value.splice(i, 0, id++)
  }

  function reset() {
    items.value = getInitialItems()
    id = items.value.length + 1
  }

  function shuffle() {
    items.value = shuffleArray(items.value)
  }

  function remove(item: number) {
    const i = items.value.indexOf(item)
    if (i > -1)
      items.value.splice(i, 1)
  }

  return {
    items,
    insert,
    reset,
    shuffle,
    remove,
  }
}
