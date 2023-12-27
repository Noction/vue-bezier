import { App } from 'vue'

import CollapseTransition from './components/Collapse/CollapseTransition.vue'

import FadeTransition from './components/Fade/FadeTransition.vue'

import ScaleTransition from './components/Scale/ScaleTransition.vue'

import SlideXLeftTransition from './components/Slide/SlideXLeftTransition.vue'
import SlideXRightTransition from './components/Slide/SlideXRightTransition.vue'
import SlideYDownTransition from './components/Slide/SlideYDownTransition.vue'
import SlideYUpTransition from './components/Slide/SlideYUpTransition.vue'

import ZoomCenterTransition from './components/Zoom/ZoomCenterTransition.vue'
import ZoomUpTransition from './components/Zoom/ZoomUpTransition.vue'
import ZoomXTransition from './components/Zoom/ZoomXTransition.vue'
import ZoomYTransition from './components/Zoom/ZoomYTransition.vue'

export const components = {
  CollapseTransition,
  FadeTransition,
  ScaleTransition,
  SlideXLeftTransition,
  SlideXRightTransition,
  SlideYDownTransition,
  SlideYUpTransition,
  ZoomCenterTransition,
  ZoomUpTransition,
  ZoomXTransition,
  ZoomYTransition
}

export function install (app: App) {
  // @ts-expect-error it's a custom flag
  if (app.$_vueBezierInstalled) return
  // @ts-expect-error it's a custom flag
  app.$_vueBezierInstalled = true

  Object
    .entries(components)
    .forEach(([key, component]) =>
      app.component(key, component)
    )
}

export default {
  install
}
