export const appliance = `<template>
  <kebab-transition[group][duration][delay]>
    <div v-show="show">Your content here</div>
  </kebab-transition>
</template>`

export const globalRegister = `import V3Transitions from 'vue3-sfc-transitions'
TRANSITION_LIST
app.use(TRANSITION_LIST_RESULT, { casing: 'PascalCase' })`

export const localRegister = `<script>
import { TRANSITION } from 'vue3-sfc-transitions'

export default {
  components: { TRANSITION }
}
</script>`

export const styleImport = `import 'vue3-sfc-transitions/dist/style.css'`
