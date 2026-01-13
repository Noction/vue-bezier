# @noction/vue-bezier

[![NPM version](https://img.shields.io/npm/v/@noction/vue-bezier.svg?style=flat)](https://npmjs.com/package/@noction/vue-bezier)
[![NPM downloads](https://img.shields.io/npm/dm/@noction/vue-bezier.svg?style=flat)](https://npmjs.com/package/@noction/vue-bezier)
[![codecov](https://codecov.io/gh/Noction/vue-bezier/branch/master/graph/badge.svg?token=IJ9ZDYJ65Z)](https://codecov.io/gh/Noction/vue-bezier)

## [Demo](https://noction.github.io/vue-bezier)

## Install :coffee:

```bash
pnpm add @noction/vue-bezier
```

## Local usage :rocket:

```vue
<script setup>
import { ref } from "vue";
import { DissolveTransition } from "@noction/vue-bezier";
import "@noction/vue-bezier/styles";

const show = ref(true);
</script>

<template>
  <DissolveTransition :duration="400">
    <div v-if="show" class="box">
      <p>Dissolve transition</p>
    </div>
  </DissolveTransition>
</template>
```

## Global usage

```js
import Transitions from "@noction/vue-bezier";
import { createApp } from "vue";
import "@noction/vue-bezier/styles";

const app = createApp(App);
app.use(Transitions);
```

## List of available transitions

### Single Element Transitions

- `BlurTransition` - Blur effect with opacity
- `ClipPathTransition` - Clip path reveal animation
- `DissolveTransition` - Fade in/out effect
- `FadeSlideTransition` - Combined fade and slide animation
- `PushTransition` - Push content in a direction
- `RotateTransition` - 3D rotation effect
- `ScaleTransition` - Scale up/down animation
- `WipeTransition` - Wipe reveal effect
- `ZoomTransition` - Zoom in/out animation

### List Transitions (TransitionGroup)

- `DissolveListTransition` - Fade effect for lists
- `ScaleListTransition` - Scale effect for lists

## Props

|     Prop     | Type               | Default  | Description                                                                                                                                                                                               |
| :----------: | ------------------ | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **duration** | _Number_, _Object_ |  `300`   | Transition duration in milliseconds. Number for specifying the same duration for enter/leave transitions. <br> Object style `{enter: 300, leave: 300}` for specifying explicit durations for enter/leave. |
|  **delay**   | _Number_, _Object_ |   `0`    | Transition delay in milliseconds. Number for specifying the same delay for enter/leave transitions. <br> Object style `{enter: 0, leave: 100}` for specifying explicit delays for enter/leave.            |
|   **tag**    | _String_           | `'span'` | Transition tag for List transitions (TransitionGroup components).                                                                                                                                         |
|  **origin**  | _String_           |   `''`   | [Transform origin property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin), can be specified with styles as well but it's shorter with this prop.                                     |
|  **styles**  | _Object_           |   `{}`   | Custom CSS styles that are applied during transition. These styles are applied via CSS variables.                                                                                                         |

## Component-Specific Props

Some transitions have additional props for customization:

### ClipPathTransition

|     Prop     |           Type           |  Default   | Description                 |
| :----------: | :----------------------: | :--------: | --------------------------- |
| **clipType** | `'circle'` \| `'square'` | `'circle'` | Type of clip path animation |

```vue
<ClipPathTransition clip-type="square" :duration="1000">
  <div v-if="show">Content</div>
</ClipPathTransition>
```

### PushTransition

|     Prop      |                    Type                     |  Default  | Description                  |
| :-----------: | :-----------------------------------------: | :-------: | ---------------------------- |
| **direction** | `'left'` \| `'right'` \| `'up'` \| `'down'` | `'right'` | Direction of the push effect |

```vue
<PushTransition direction="down" :duration="400">
  <div v-if="show">Content</div>
</PushTransition>
```

### ScaleTransition

|    Prop    |   Type   |   Default    | Description                              |
| :--------: | :------: | :----------: | ---------------------------------------- |
| **origin** | _String_ | `'top left'` | Transform origin for the scale animation |

```vue
<ScaleTransition origin="center" :duration="300">
  <div v-if="show">Content</div>
</ScaleTransition>
```

## List Transitions

For animating lists of elements, use the dedicated List transition components:

```vue
<script setup>
import { ref } from "vue";
import { DissolveListTransition } from "@noction/vue-bezier";
import "@noction/vue-bezier/styles";

const items = ref([1, 2, 3, 4, 5]);
</script>

<template>
  <DissolveListTransition :duration="400" tag="div">
    <div v-for="item in items" :key="item" class="item">
      {{ item }}
    </div>
  </DissolveListTransition>
</template>
```

**Important notes:**

1. Elements inside list transitions should have `display: inline-block` or must be placed in a flex context: [Vue.js docs reference](https://vuejs.org/guide/built-ins/transition-group.html#move-transitions)
2. Each list transition has a `move` class for animating position changes. The move duration defaults to `.3s` or `.35s` and cannot be configured via props. To customize, override the CSS class:

```css
/* Example: Custom move duration for DissolveListTransition */
.noc-dissolve-move {
  transition: transform 0.5s ease-out;
}
```

## Customizing Transitions

All CSS classes and custom properties are prefixed with `noc-` to prevent naming conflicts with other libraries. You can override any transition styles by targeting the specific classes:

```css
/* Override dissolve transition timing */
.noc-dissolve-enter-active {
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Override blur transition effect */
.noc-blur-enter-from {
  opacity: 0;
  filter: blur(20px); /* Increase blur intensity */
}

/* Override scale list move animation */
.noc-scale-list-move {
  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.5, 1);
}
```

Available CSS custom properties:

- `--noc-transition-enter-duration`
- `--noc-transition-leave-duration`
- `--noc-transition-enter-delay`
- `--noc-transition-leave-delay`
- `--noc-transform-origin` (ScaleTransition)

## License

MIT &copy; [50rayn](https://github.com/50rayn)

## Special thanks to

@cristijora (The UI for list transitions in the demo is inspired by [vue2-transitions](https://github.com/BinarCode/vue2-transitions) )
