# Migration Guide

## Migrating from v1.x to v2.0.0

Version 2.0.0 is a **complete rewrite** of `@noction/vue-bezier` with a new architecture, new transitions, and improved customization. This guide will help you migrate from v1.x to v2.0.0.

### Major Changes

1. **Completely new transition components** - All v1.x transitions have been replaced
2. **New architecture** - Uses modern Vue 3 Composition API exclusively
3. **CSS custom properties** - Dynamic timing control via CSS variables
4. **Consistent props interface** - All transitions share the same props
5. **Namespaced CSS** - All classes prefixed with `noc-` to prevent conflicts

### v1.x vs v2.0.0 Component Mapping

#### Direct Replacements

| v1.x Component          | v2.0.0 Replacement    | Notes                                    |
| ----------------------- | --------------------- | ---------------------------------------- |
| `FadeTransition`        | `DissolveTransition`  | Simple opacity fade                      |
| `ScaleTransition`       | `ScaleTransition`     | Same name, different implementation      |
| `CollapseTransition`    | _Removed_             | No direct replacement                    |
| `SlideXLeftTransition`  | `PushTransition`      | Use `direction="left"`                   |
| `SlideXRightTransition` | `PushTransition`      | Use `direction="right"`                  |
| `SlideYUpTransition`    | `PushTransition`      | Use `direction="up"`                     |
| `SlideYDownTransition`  | `PushTransition`      | Use `direction="down"`                   |
| `ZoomCenterTransition`  | `ZoomTransition`      | Similar zoom effect                      |
| `ZoomUpTransition`      | `ZoomTransition`      | Use `origin="bottom"` for similar effect |
| `ZoomXTransition`       | `ScaleTransition`     | Use `origin="center"`                    |
| `ZoomYTransition`       | `ScaleTransition`     | Use `origin="center"`                    |

#### New Transitions in v2.0.0

These transitions are entirely new and have no v1.x equivalent:

- `BlurTransition` - Blur effect with opacity fade
- `ClipPathTransition` - Clip path reveal animation (circle or square)
- `FadeSlideTransition` - Combined fade and slide animation
- `RotateTransition` - 3D rotation effect
- `WipeTransition` - Wipe reveal effect
- `DissolveListTransition` - List transition with fade
- `ScaleListTransition` - List transition with scale

### Props Changes

#### v1.x Props

```js
{
  duration: Number | Object,
  group: Boolean,
  tag: String,
  origin: String,
  styles: Object
}
```

#### v2.0.0 Props

```js
{
  duration: Number | Object,  // Same
  delay: Number | Object,      // NEW - transition delay
  group: Boolean,              // Same (but deprecated, use List components instead)
  tag: String,                 // Same
  origin: String,              // Same
  styles: Object               // Same
}
```

**New in v2.0.0:**
- `delay` prop for controlling transition delays
- Component-specific props (e.g., `clipType` for ClipPathTransition, `direction` for PushTransition)

### Migration Examples

#### Example 1: FadeTransition → DissolveTransition

**v1.x:**
```vue
<template>
  <FadeTransition :duration="300">
    <div v-if="show">Content</div>
  </FadeTransition>
</template>

<script>
import { FadeTransition } from '@noction/vue-bezier'
import '@noction/vue-bezier/styles'

export default {
  components: { FadeTransition }
}
</script>
```

**v2.0.0:**
```vue
<template>
  <DissolveTransition :duration="300">
    <div v-if="show">Content</div>
  </DissolveTransition>
</template>

<script setup>
import { DissolveTransition } from '@noction/vue-bezier'
import '@noction/vue-bezier/styles'
</script>
```

#### Example 2: SlideXLeftTransition → PushTransition

**v1.x:**
```vue
<SlideXLeftTransition :duration="400">
  <div v-if="show">Content</div>
</SlideXLeftTransition>
```

**v2.0.0:**
```vue
<PushTransition direction="left" :duration="400">
  <div v-if="show">Content</div>
</PushTransition>
```

#### Example 3: Group Transitions

**v1.x:**
```vue
<FadeTransition group tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</FadeTransition>
```

**v2.0.0:**
```vue
<DissolveListTransition tag="ul" :duration="400">
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</DissolveListTransition>
```

**Note:** In v2.0.0, use dedicated List components (`DissolveListTransition`, `ScaleListTransition`) instead of the `group` prop.

#### Example 4: Using Delay (New in v2.0.0)

**v2.0.0 only:**
```vue
<DissolveTransition 
  :duration="{ enter: 300, leave: 200 }"
  :delay="{ enter: 0, leave: 100 }"
>
  <div v-if="show">Content</div>
</DissolveTransition>
```

### CSS Class Changes

All CSS classes in v2.0.0 are prefixed with `noc-` to prevent conflicts.

#### v1.x Classes (used `noc-` prefix)

```css
.noc-fade-enter-active
.noc-slide-enter-active
.noc-zoom-enter-active
.noc-scale-enter-active
```

#### v2.0.0 Classes (also use `noc-` prefix)

```css
.noc-dissolve-enter-active
.noc-push-enter-active
.noc-zoom-enter-active
.noc-scale-enter-active
.noc-blur-enter-active
.noc-rotate-enter-active
.noc-wipe-enter-active
.noc-fade-slide-enter-active
.noc-clip-enter-active
```

**Important:** If you were overriding v1.x CSS classes, you'll need to update them for the new transition names.

### Custom Styling

#### v1.x

Used inline styles with `animationFillMode` and `animationTimingFunction`:

```js
:styles="{ 
  animationFillMode: 'both', 
  animationTimingFunction: 'ease-out' 
}"
```

#### v2.0.0

Uses CSS custom properties for more flexible control:

```css
/* Override transition timing */
.noc-dissolve-enter-active {
  transition: opacity var(--noc-transition-enter-duration) cubic-bezier(0.4, 0, 0.2, 1);
}

/* Available CSS custom properties */
--noc-transition-enter-duration
--noc-transition-leave-duration
--noc-transition-enter-delay
--noc-transition-leave-delay
--noc-transform-origin (ScaleTransition)
```

### Breaking Changes Summary

1. **All v1.x transition components removed** - Use the mapping table above
2. **`CollapseTransition` removed** - No direct replacement (consider using a third-party library or custom implementation)
3. **Group transitions** - Use dedicated List components instead of `group` prop
4. **Architecture change** - Complete rewrite using Vue 3 Composition API and CSS custom properties
5. **CSS implementation** - Moved from `@keyframes` animations to CSS transitions

### Step-by-Step Migration

1. **Update package version**
   ```bash
   pnpm update @noction/vue-bezier
   ```

2. **Replace component imports**
   - Use the mapping table to find replacements
   - Update component names in your templates

3. **Update group transitions**
   - Replace `<FadeTransition group>` with `<DissolveListTransition>`
   - Replace `<ScaleTransition group>` with `<ScaleListTransition>`

4. **Update custom CSS overrides**
   - Check if you're overriding transition classes
   - Update class names to match new transition names
   - Update to use CSS transitions instead of animations if needed

5. **Test thoroughly**
   - Visual testing recommended
   - Check timing and easing
   - Verify list transitions work correctly

### Need Help?

If you encounter issues during migration:

1. Check the [README](./README.md) for current API documentation
2. Visit the [Demo](https://noction.github.io/vue-bezier) for live examples of all transitions
3. Open an issue on [GitHub](https://github.com/Noction/vue-bezier/issues)

### Quick Reference

#### v1.x Transitions
- FadeTransition
- ScaleTransition
- CollapseTransition
- SlideXLeftTransition, SlideXRightTransition
- SlideYUpTransition, SlideYDownTransition
- ZoomCenterTransition, ZoomUpTransition
- ZoomXTransition, ZoomYTransition

#### v2.0.0 Transitions
- **Single Element:** BlurTransition, ClipPathTransition, DissolveTransition, FadeSlideTransition, PushTransition, RotateTransition, ScaleTransition, WipeTransition, ZoomTransition
- **Lists:** DissolveListTransition, ScaleListTransition
