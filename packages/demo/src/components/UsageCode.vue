<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { codeToHtml } from 'shiki'
import { computed, ref, watch } from 'vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { options } from '../composables/options'

const { transitionGroup, transitionType } = injectStrict(TransitionInfoKey)

const usageCode = computed(() => {
  let code = `<${transitionType.value}`

  // Add duration prop if not default
  if (options.leave !== 300 || options.enter !== 300) {
    if (options.enter === options.leave) {
      code += ` :duration="${options.enter}"`
    }
    else {
      code += ` :duration="{ enter: ${options.enter}, leave: ${options.leave} }"`
    }
  }

  // Add delay prop if not default
  if (options.delay !== 0) {
    code += ` :delay="${options.delay}"`
  }

  // Add group prop if enabled
  if (transitionGroup.value) {
    code += ' group'
  }

  code += ' />'

  return code
})

const { copy, copied } = useClipboard({ source: usageCode })

// Highlighted code ref
const usageHighlighted = ref('')

// Highlight code with Shiki
async function highlightCode() {
  const theme = document.documentElement.classList.contains('dark')
    ? 'github-dark'
    : 'github-light'

  usageHighlighted.value = await codeToHtml(usageCode.value, {
    lang: 'vue',
    theme,
  })
}

// Initial highlight
highlightCode()

// Re-highlight when code changes
watch([usageCode, transitionType, transitionGroup], () => {
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
  <div class="p-4 flex items-center justify-between gap-4">
    <div
      class="flex-1 shiki-container rounded-lg border border-slate-200 dark:border-slate-700"
      v-html="usageHighlighted"
    />
    <button
      class="hidden lg:flex px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors items-center gap-2"
      @click="copy()"
    >
      <i-lucide-check v-if="copied" class="text-green-500" />
      <i-lucide-copy v-else />
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
  </div>
</template>

<style scoped>
  .shiki-container :deep(pre) {
    padding: .75rem;
    margin: 0;
    font-family: 'Fira code', 'Fira Mono', Consolas, Menlo, Courier, monospace;
    font-size: .875rem;
    line-height: 1.5;
    word-break: break-all;
    white-space: pre-wrap;
  }

  .shiki-container :deep(code) {
    font-family: inherit;
    word-break: break-all;
    white-space: pre-wrap;
  }
</style>
