export const appliance = `<template>
  <kebab-transition[group][duration][delay]>
    <div v-show="show">
      Your content here
    </div>
  </kebab-transition>
</template>`

export const globalRegister = `import VueBezier from '@noction/vue-bezier'

app.use(VueBezier)`

export const localRegister = `<script setup lang="ts">
import { TRANSITION } from '@noction/vue-bezier'
</script>`

export const styleImport = 'import \'@noction/vue-bezier/styles\''
