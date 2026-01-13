<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
import * as Package from './../../package.json'
import NavLogo from './NavLogo.vue'

const { version } = Package

const isUserAction = ref(false)

const isDark = useDark({
  valueLight: 'light',
  onChanged: (isDark, defaultHandler, mode) => {
    if (!isUserAction.value) {
      defaultHandler(mode)
      return
    }

    if (!document.startViewTransition) {
      defaultHandler(mode)
      return
    }

    document.startViewTransition(() => {
      defaultHandler(mode)
    })
  },
})

function toggleDark() {
  isUserAction.value = true
  useToggle(isDark)()
}
</script>

<template>
  <nav
    class="sticky items-center flex top-0 z-40 w-full justify-between bg-white/95 px-4 py-3 lg:px-8 lg:py-4 dark:border-slate-50/6 dark:bg-transparent lg:border-b lg:border-slate-900/10"
  >
    <NavLogo />
    <div class="right flex flex-row items-center gap-x-4">
      <span
        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-700 dark:text-slate-200"
        v-text="version"
      />
      <button
        class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 text-xl"
        aria-label="Toggle dark mode"
        @click="toggleDark()"
      >
        <ILucideSun v-if="isDark" />
        <ILucideMoon v-else />
      </button>
      <a
        class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
        target="_blank"
        href="https://www.npmjs.com/package/@noction/vue-bezier"
        aria-label="View on NPM"
      >
        <IMdiNpm class="text-3xl" />
      </a>
      <a
        class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
        target="_blank"
        href="https://github.com/Noction/vue-bezier"
        aria-label="View on GitHub"
      >
        <IMdiGithub class="text-xl" />
      </a>
    </div>
  </nav>
</template>
