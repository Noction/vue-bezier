<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, ref, watch } from 'vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import {
  globalRegister,
  styleImport,
} from '../assets/example'

const { transitionType } = injectStrict(TransitionInfoKey)

// Highlighted code refs
const styleImportHighlighted = ref('')
const globalRegisterHighlighted = ref('')
const localRegisterHighlighted = ref('')

const localRegister = computed(() => `<script setup lang="ts">
import { ${transitionType.value} } from '@noction/vue-bezier'
<\/script>`)

// Highlight code with Shiki
async function highlightCode() {
  const theme = document.documentElement.classList.contains('dark')
    ? 'github-dark'
    : 'github-light'

  styleImportHighlighted.value = await codeToHtml(styleImport, {
    lang: 'javascript',
    theme,
  })

  globalRegisterHighlighted.value = await codeToHtml(globalRegister, {
    lang: 'javascript',
    theme,
  })

  localRegisterHighlighted.value = await codeToHtml(localRegister.value, {
    lang: 'vue',
    theme,
  })
}

// Initial highlight
highlightCode()

// Re-highlight when transition type changes
watch(transitionType, () => {
  highlightCode()
})

// Re-highlight when theme changes
const observer = new MutationObserver(() => {
  highlightCode()
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
})
</script>

<template>
  <div class="h-full auto-rows-auto content-start gap-6 p-6">
    <h2 class="text-2xl font-bold mb-4">
      Setup
    </h2>

    <div class="code-block grid gap-y-2">
      <h3 class="text-lg font-semibold">
        1. Install styles
      </h3>
      <div
        class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
        v-html="styleImportHighlighted"
      />
    </div>

    <div class="code-block grid gap-y-2 mt-6">
      <h3 class="text-lg font-semibold">
        2. Register components
      </h3>
      <div class="grid md:grid-cols-[1fr_auto_1fr] gap-4 border border-black/5 p-4 dark:border-white/5 rounded-xl">
        <div class="code-block grid gap-y-2">
          <h4 class="font-medium text-sm text-slate-600 dark:text-slate-400">
            Globally
          </h4>
          <div
            class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
            v-html="globalRegisterHighlighted"
          />
        </div>
        <div class="code-block flex md:flex-col flex-row items-center gap-4 md:justify-center">
          <hr class="md:hidden grow border-slate-200 dark:border-slate-700">
          <span class="grow-0 text-xs text-slate-500">OR</span>
          <hr class="md:hidden grow border-slate-200 dark:border-slate-700">
        </div>
        <div class="code-block grid gap-y-2">
          <h4 class="font-medium text-sm text-slate-600 dark:text-slate-400">
            Locally
          </h4>
          <div
            class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
            v-html="localRegisterHighlighted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .shiki-container :deep(pre) {
    padding: .75rem;
    margin: 0;
    font-family: 'Fira code', 'Fira Mono', Consolas, Menlo, Courier, monospace;
    font-size: 12px;
    line-height: 1.5;
  }

  .shiki-container :deep(code) {
    font-family: inherit;
  }
</style>
