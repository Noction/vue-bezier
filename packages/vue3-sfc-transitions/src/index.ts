import PrivateCollapseTransition from './components/Collapse/CollapseTransition.vue'

import PrivateFadeTransition from './components/Fade/FadeTransition.vue'

import PrivateScaleTransition from './components/Scale/ScaleTransition.vue'

import PrivateSlideXLeftTransition from './components/Slide/SlideXLeftTransition.vue'
import PrivateSlideXRightTransition from './components/Slide/SlideXRightTransition.vue'
import PrivateSlideYDownTransition from './components/Slide/SlideYDownTransition.vue'
import PrivateSlideYUpTransition from './components/Slide/SlideYUpTransition.vue'

import PrivateZoomCenterTransition from './components/Zoom/ZoomCenterTransition.vue'
import PrivateZoomUpTransition from './components/Zoom/ZoomUpTransition.vue'
import PrivateZoomXTransition from './components/Zoom/ZoomXTransition.vue'
import PrivateZoomYTransition from './components/Zoom/ZoomYTransition.vue'

interface Options {
  casing?: 'PascalCase' | 'kebab-case'
  components?: Array<
    | 'FadeTransition'
    | 'ZoomCenterTransition'
    | 'ZoomXTransition'
    | 'ZoomYTransition'
    | 'ZoomUpTransition'
    | 'SlideYUpTransition'
    | 'SlideYDownTransition'
    | 'SlideXLeftTransition'
    | 'SlideXRightTransition'
    | 'ScaleTransition'
    | 'CollapseTransition'
  >
}

const components = {
  CollapseTransition: PrivateCollapseTransition,
  FadeTransition: PrivateFadeTransition,
  ScaleTransition: PrivateScaleTransition,
  SlideXLeftTransition: PrivateSlideXLeftTransition,
  SlideXRightTransition: PrivateSlideXRightTransition,
  SlideYDownTransition: PrivateSlideYDownTransition,
  SlideYUpTransition: PrivateSlideYUpTransition,
  ZoomCenterTransition: PrivateZoomCenterTransition,
  ZoomUpTransition: PrivateZoomUpTransition,
  ZoomXTransition: PrivateZoomXTransition,
  ZoomYTransition: PrivateZoomYTransition
}

export {
  PrivateCollapseTransition as CollapseTransition,
  PrivateFadeTransition as FadeTransition,
  PrivateScaleTransition as ScaleTransition,
  PrivateSlideXLeftTransition as SlideXLeftTransition,
  PrivateSlideXRightTransition as SlideXRightTransition,
  PrivateSlideYDownTransition as SlideYDownTransition,
  PrivateSlideYUpTransition as SlideYUpTransition,
  PrivateZoomCenterTransition as ZoomCenterTransition,
  PrivateZoomUpTransition as ZoomUpTransition,
  PrivateZoomXTransition as ZoomXTransition,
  PrivateZoomYTransition as ZoomYTransition
}

export function install(app, options: Options) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (app.$_v3TransitionsInstalled) return
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.$_v3TransitionsInstalled = true

  const componentNameCasing = {
    PascalCase: (str) => str,
    'kebab-case': (str) =>
      `${str.slice(0, 1)}${str
        .slice(1)
        .replace(/[A-Z]/g, '-$&')}`.toLocaleLowerCase()
  }

  const nameFormat = componentNameCasing[options?.casing ?? 'kebab-case']

  if (options && options?.components) {
    options.components.forEach((name: string) =>
      app.component(nameFormat(name), components[name])
    )
  } else {
    Object.entries(components).forEach(([key, component]) =>
      app.component(nameFormat(key), component)
    )
  }
}

export default {
  install,
  // eslint-disable-next-line no-undef
  version: VERSION
}
