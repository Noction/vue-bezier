<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, ref, watch } from 'vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import { appliance } from '../assets/example'
import { options } from '../composables/options'

const { transitionGroup, transitionType } = injectStrict(TransitionInfoKey)

// Highlighted code ref
const applianceHighlighted = ref('')

function formatter(code: string) {
  let sampleCode = code
    .replace(/TRANSITION/g, transitionType.value)
    .replace(/kebab-transition/g, transitionType.value)

  if (!transitionGroup.value) {
    sampleCode = sampleCode.replace(/\[group\]/g, '')
  }
  else {
    sampleCode = sampleCode.replace(/\[group\]/g, ' group')
  }

  if (options.leave !== 300 || options.enter !== 300) {
    sampleCode = sampleCode.replace(
      /\[duration\]/g,
      ` :duration="${JSON.stringify({ enter: options.enter, leave: options.leave })}"`,
    )
  }
  else {
    sampleCode = sampleCode.replace(/\[duration\]/g, '')
  }

  if (options.delay !== 0) {
    sampleCode = sampleCode.replace(/\[delay\]/g, ` :delay="${options.delay}"`)
  }
  else {
    sampleCode = sampleCode.replace(/\[delay\]/g, '')
  }

  return sampleCode
}

const applianceCode = computed(() => formatter(appliance))

// Highlight code with Shiki
async function highlightCode() {
  const theme = document.documentElement.classList.contains('dark')
    ? 'github-dark'
    : 'github-light'

  applianceHighlighted.value = await codeToHtml(applianceCode.value, {
    lang: 'vue',
    theme,
  })
}

// Initial highlight
highlightCode()

// Re-highlight when code changes
watch(applianceCode, () => {
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
  <div class="h-full p-6">
    <h2 class="text-2xl font-bold mb-4">
      Usage
    </h2>

    <div class="code-block grid gap-y-2">
      <h3 class="text-lg font-semibold">
        {{ transitionType }}
      </h3>
      <div
        class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
        v-html="applianceHighlighted"
      />
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
