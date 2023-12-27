export const appliance = `<template>
  <kebab-transition[group][duration][delay]>
    <div v-show="show">
      Your content here
    </div>
  </kebab-transition>
</template>`

export const globalRegister = `import VueBezier from '@noction/vue-bezier'
TRANSITION_LIST
app.use(TRANSITION_LIST_RESULT)`

export const localRegister = `<script>
import { TRANSITION } from '@noction/vue-bezier'

export default {
  components: { TRANSITION }
}
</script>`

export const styleImport = 'import \'@noction/vue-bezier/styles\''
