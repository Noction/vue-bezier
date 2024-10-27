<script setup lang="ts">
// Disable sorting imports rule, due to module specificity
import Prism from 'prismjs'
import { computed } from 'vue'
import { PrismEditor } from 'vue-prism-editor'
import { TransitionBundleKey, TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'
import {
  appliance,
  globalRegister,
  localRegister,
  styleImport,
} from '../assets/example'

import { options } from '../composables/options'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import 'vue-prism-editor/dist/prismeditor.min.css'

defineProps({
  shown: {
    default: false,
    type: Boolean,
  },
})

const { transitionGroup, transitionType }
  = injectStrict(TransitionInfoKey)

const { transitionsList } = injectStrict(TransitionBundleKey)

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
  if (
    options.leave !== 300
    || options.enter !== 300
  ) {
    sampleCode = sampleCode.replace(
      /\[duration\]/g,
      ` :duration="${JSON.stringify({ enter: options.enter, leave: options.leave })}"`,
    )
  }
  else {
    sampleCode = sampleCode.replace(/\[duration\]/g, '')
  }

  if (options.delay !== 0) {
    sampleCode = sampleCode.replace(
      /\[delay\]/g,
      ` :delay="${options.delay}"`,
    )
  }
  else {
    sampleCode = sampleCode.replace(/\[delay\]/g, '')
  }

  return sampleCode
}

function highlighter(code: string) {
  return Prism.highlight(
    code,
    {
      ...Prism.languages.markup,
      ...Prism.languages.js,
      ...Prism.languages.css,
    },
    'markup',
  )
}

function globalRegFormatter(code: string) {
  let sampleCode = code

  if (transitionsList.value.length) {
    const mapper = transitionsList.value.map(el => `'${el}'`)

    sampleCode = sampleCode.replace(
      /TRANSITION_LIST\b/g,
      `\nconst transitionList = [\n${mapper.join(', ')}\n]\n`,
    )
    sampleCode = sampleCode.replace(/TRANSITION_LIST_RESULT/g, 'transitionList')
  }
  else {
    sampleCode = sampleCode.replace(/TRANSITION_LIST\b/g, '')
    sampleCode = sampleCode.replace(/TRANSITION_LIST_RESULT/g, 'VueBezier')
  }

  return sampleCode
}

const styleImportCode = styleImport
const globalRegisterCode = computed(() => globalRegFormatter(globalRegister))
const localRegisterCode = computed(() => formatter(localRegister))
const applianceCode = computed(() => formatter(appliance))
</script>

<template>
  <div
    class="h-full auto-rows-auto content-start gap-10 border-l border-black/5 bg-white p-8 dark:border-white/5 xl:static xl:grid"
    :class="{
      'top-0 bottom-0 right-0 z-20 block h-full w-3/4 lg:fixed': shown,
      'hidden': !shown,
    }"
  >
    <div class="code-block grid gap-y-2">
      <h3 class="text-xl font-semibold">
        Style import
      </h3>
      <PrismEditor
        :model-value="styleImportCode"
        class="my-editor rounded-xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/25"
        readonly
        :highlight="highlighter"
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
          <PrismEditor
            :model-value="globalRegisterCode"
            class="my-editor rounded-xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/25"
            readonly
            :highlight="highlighter"
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
          <PrismEditor
            :model-value="localRegisterCode"
            class="my-editor rounded-xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/25"
            readonly
            :highlight="highlighter"
          />
        </div>
      </div>
    </div>
    <div class="code-block grid gap-y-2">
      <h3 class="text-xl font-semibold">
        Appliance
      </h3>
      <PrismEditor
        :model-value="applianceCode"
        class="my-editor rounded-xl border border-black/5 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/25"
        readonly
        :highlight="highlighter"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .my-editor {
    font-family: "Fira code", "Fira Mono", Consolas, Menlo, Courier, monospace;
    font-size: 12px;
    line-height: 1.5;
  }
</style>
