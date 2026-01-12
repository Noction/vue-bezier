<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, ref, watch } from 'vue'
import { TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import {
  appliance,
  globalRegister,
  localRegister,
  styleImport,
} from '../assets/example'

import { options } from '../composables/options'

defineProps({
  shown: {
    default: false,
    type: Boolean,
  },
})

const { transitionGroup, transitionType } = injectStrict(TransitionInfoKey)

// Highlighted code refs
const styleImportHighlighted = ref('')
const globalRegisterHighlighted = ref('')
const localRegisterHighlighted = ref('')
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

const styleImportCode = styleImport
const globalRegisterCode = globalRegister
const localRegisterCode = computed(() => formatter(localRegister))
const applianceCode = computed(() => formatter(appliance))

// Highlight code with Shiki
async function highlightCode() {
  const theme = document.documentElement.classList.contains('dark')
    ? 'github-dark'
    : 'github-light'

  styleImportHighlighted.value = await codeToHtml(styleImportCode, {
    lang: 'javascript',
    theme,
  })

  globalRegisterHighlighted.value = await codeToHtml(globalRegisterCode, {
    lang: 'javascript',
    theme,
  })

  localRegisterHighlighted.value = await codeToHtml(localRegisterCode.value, {
    lang: 'vue',
    theme,
  })

  applianceHighlighted.value = await codeToHtml(applianceCode.value, {
    lang: 'vue',
    theme,
  })
}

// Initial highlight
highlightCode()

// Re-highlight when code changes
watch([localRegisterCode, applianceCode], () => {
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
  <div
    class="h-full auto-rows-auto content-start gap-10 border-l border-black/5 bg-white p-8 dark:border-white/5 dark:bg-slate-900"
    :class="{
      'top-0 bottom-0 right-0 z-20 block h-full w-3/4 lg:fixed': shown,
      'hidden xl:block xl:static xl:grid': !shown,
    }"
  >
    <div class="code-block grid gap-y-2">
      <h3 class="text-xl font-semibold">
        Style import
      </h3>
      <div
        class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
        v-html="styleImportHighlighted"
      />
    </div>
    <div class="code-block grid gap-y-2">
      <h3 class="text-xl font-semibold">
        Registration
      </h3>
      <div
        class="grid auto-cols-auto gap-y-4 border border-black/5 p-4 dark:border-white/5"
      >
        <div class="code-block grid gap-y-2">
          <h3 class="font-semibold">
            Globally
          </h3>
          <div
            class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
            v-html="globalRegisterHighlighted"
          />
        </div>
        <div class="code-block relative flex flex-row items-center gap-x-4">
          <hr class="grow">
          <span class="grow-0">OR</span>
          <hr class="grow">
        </div>
        <div class="code-block grid gap-y-2">
          <h3 class="font-semibold">
            Locally
          </h3>
          <div
            class="shiki-container overflow-auto rounded-xl border border-black/5 dark:border-white/5"
            v-html="localRegisterHighlighted"
          />
        </div>
      </div>
    </div>
    <div class="code-block grid gap-y-2">
      <h3 class="text-xl font-semibold">
        Appliance
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
    padding: 1rem;
    margin: 0;
    font-family: 'Fira code', 'Fira Mono', Consolas, Menlo, Courier, monospace;
    font-size: 12px;
    line-height: 1.5;
  }

  .shiki-container :deep(code) {
    font-family: inherit;
  }
</style>
