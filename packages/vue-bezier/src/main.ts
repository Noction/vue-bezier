import * as components from './components'
export * from './components'
import type { App } from 'vue'

export function install (app: App) {
  // @ts-expect-error it's a custom flag
  if (app.$_vueBezierInstalled) return
  // @ts-expect-error it's a custom flag
  app.$_vueBezierInstalled = true

  Object
    .entries(components)
    .forEach(([componentName, component]) =>
      app.component(componentName, component)
    )
}

export default {
  install
}
