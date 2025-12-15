<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showLogo = ref(false)
const showName = ref(false)

onMounted(() => {
  setTimeout(() => {
    showLogo.value = true
  }, 1000)
  setTimeout(() => {
    showName.value = true
  }, 2000)
})
</script>

<template>
  <div class="relative h-10 md:h-12 grid grid-cols-[50px_1fr] items-center gap-x-1 text-xl font-semibold md:gap-x-2">
    <div class="relative h-full">
      <push-transition direction="down" :duration="700">
        <img v-if="showLogo" class="block h-10 md:h-12" src="../assets/logo.png">
      </push-transition>
    </div>
    <div class="relative h-full">
      <push-transition direction="right" :duration="500">
        <div v-if="showName" class="flex items-center h-full">
          <span class="text-sm md:text-base">Transitions</span>
        </div>
      </push-transition>
    </div>
  </div>
</template>
