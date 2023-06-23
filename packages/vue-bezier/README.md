# @noction/vue-bezier

[![NPM version](https://img.shields.io/npm/v/@noction/vue-bezier.svg?style=flat)](https://npmjs.com/package/@noction/vue-bezier)
[![NPM downloads](https://img.shields.io/npm/dm/@noction/vue-bezier.svg?style=flat)](https://npmjs.com/package/@noction/vue-bezier)
[![codecov](https://codecov.io/gh/50rayn/@noction/vue-bezier/branch/master/graph/badge.svg?token=IJ9ZDYJ65Z)](https://codecov.io/gh/50rayn/@noction/vue-bezier)
[![Featured on Openbase](https://badges.openbase.com/js/featured/@noction/vue-bezier.svg?token=hU9KYWV7h9YbmSVPtFbArzNxlWR8XfEc1pJhzSaLTp8=)](https://openbase.com/js/@noction/vue-bezier?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## [Demo](https://noction.github.io/vue-bezier)

## Install :coffee:

```bash
npm i -S @noction/vue-bezier
```

## Local usage :rocket:

```vue
<template>
   <fade-transition>
      <div class="box" v-show="show">
        <p>Fade transition</p>
      </div>
    </fade-transition>
</template>

<script>
import '@noction/vue-bezier/dist/style.css'
import { FadeTransition } from '@noction/vue-bezier'

export default {
  components: {
    FadeTransition
  }
}
</script>
```

## Global usage
```js
import '@noction/vue-bezier/dist/style.css'
import Transitions from '@noction/vue-bezier'
import { createApp } from 'vue'

const app = createApp(App)
app.use(Transitions)
```

## List of available transitions
- FadeTransition
- ZoomCenterTransition
- ZoomXTransition
- ZoomYTransition
- SlideXLeftTransition
- SlideXRightTransition
- SlideYUpTransition
- SlideYDownTransition
- ScaleTransition
- CollapseTransition

## Props

|     Prop     | Type               |                               Default                                | Description                                                                                                                                                                               |
|:------------:|--------------------|:--------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **duration** | _Number_, _Object_ |                                `300`                                 | Transition duration. Number for specifying the same duration for enter/leave transitions. <br> Object style `{enter: 300, leave: 300}` for specifying explicit durations for enter/leave. |
|  **group**   | _Boolean_          |                               `false`                                | Whether the component should be a `transition-group` component.                                                                                                                           |
|   **tag**    | _String_           |                               `'span'`                               | Transition tag, in case the component is a `transition-group.`                                                                                                                            |
|  **origin**  | _String_           |                                 `''`                                 | [Transform origin property](https://tympanus.net/codrops/css_reference/transform-origin/), can be specified with styles as well but it's shorter with this prop.                          |
|  **styles**  | _Object_           | `{ animationFillMode: 'both', animationTimingFunction: 'ease-out' }` | Element styles that are applied during transition. These styles are applied on `@beforeEnter` and `@beforeLeave` hooks.                                                                   |

## Group transitions
Each transition can be used as a `transition-group` by adding the `group` prop to one of the desired transitions.
```html
<fade-transition group>
   <!--keyed children here-->
</fade-transition>
```
Gotchas/things to watch:
1. Elements inside `group` transitions should have `display: inline-block` or must be placed in a flex context:
   [Vue.js docs reference](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions)
2. Each transition has a `move` class [move class docs](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions).
   Unfortunately the duration for the move transition cannot be configured through props. By default each transition has a `move` class associated
   with `.3s` transition duration:

- Zoom
  ```css
    .zoom-move { transition: transform .3s ease-out; }
  ```
- Slide
  ```css
    .slide-move { transition: transform .3s ease-out; }
  ```
- Scale
  ```css
    .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); }
  ``` 
- Fade
  ```css
    .fade-move { transition: transform .3s ease-out; }
   ``` 
If you want to configure the duration, just redefine the class for the transition you use with the desired duration.

## License

MIT &copy; [50rayn](https://github.com/50rayn)

## Special thanks to

@cristijora (The UI for list transitions in the demo is inspired by [vue2-transitions](https://github.com/BinarCode/vue2-transitions) )  
