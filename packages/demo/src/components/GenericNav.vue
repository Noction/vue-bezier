<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type Props = {
  section: 'appear' | 'between' | 'list'
  activeClass: string
}

const props = defineProps<Props>()

const router = useRouter()
const route = useRoute()

const visibleCount = ref(0)

const currentTransition = computed(() => {
  const name = route.name as string
  return name ? name.replace(`${props.section}-`, '') : 'dissolve'
})

const transitions = computed(() => {
  const sectionRoute = router.getRoutes().find(r => r.path === `/${props.section}`)
  if (!sectionRoute?.children)
    return []

  return sectionRoute.children.map(child => ({
    value: child.path,
    name: child.name as string,
    label: child.path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  }))
})

function navigateToTransition(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  router.push(`/${props.section}/${value}`)
}

const { pause } = useIntervalFn(() => {
  if (visibleCount.value < transitions.value.length) {
    visibleCount.value++
  }
  else {
    pause()
  }
}, 50)
</script>

<template>
  <!-- Mobile: Select dropdown -->
  <select
    :key="currentTransition"
    :value="currentTransition"
    :name="`${section}-transition-select`"
    class="lg:hidden w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium text-sm"
    @change="navigateToTransition"
  >
    <option
      v-for="transition in transitions"
      :key="transition.value"
      :value="transition.value"
    >
      {{ transition.label }}
    </option>
  </select>

  <!-- Desktop: Link list -->
  <DissolveListTransition
    tag="nav"
    :duration="400"
    class="hidden lg:flex flex-col items-end gap-x-8"
  >
    <router-link
      v-for="transition in transitions.slice(0, visibleCount)"
      :key="transition.value"
      class="p-2"
      :to="{ name: transition.name }"
      :active-class="activeClass"
    >
      {{ transition.label }}
    </router-link>
  </DissolveListTransition>
</template>
