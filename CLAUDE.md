# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **@noction/vue-bezier**, a Vue 3 transition component library providing reusable, customizable CSS-based transitions with Bezier timing functions. The project is a **pnpm monorepo** with two packages:

- `packages/vue-bezier` - Main library (published to npm)
- `packages/demo` - Interactive demo application (deployed to GitHub Pages)

## Common Commands

### Development
```bash
# Start development (builds library + runs demo)
pnpm dev

# Build library only (quick dev build, no type checking)
pnpm build:light

# Build everything (library + demo, with type checking)
pnpm build
```

### Testing
```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests for library only
pnpm -F vue-bezier test
```

### Linting
```bash
# Lint everything (ESLint + Stylelint)
pnpm lint

# Fix ESLint issues
pnpm lint:es:fix

# Lint styles only
pnpm lint:style
```

### Type Checking
```bash
# Check types without emitting (library)
pnpm -F vue-bezier type:check

# Check types without emitting (demo)
pnpm -F demo run vue-tsc --noEmit
```

### Release
```bash
# Bump versions, commit, tag, and push
pnpm release
```

## Architecture

### Monorepo Structure

Uses **pnpm workspaces** defined in `pnpm-workspace.yaml`. The demo package references the library via `"@noction/vue-bezier": "workspace:*"`, ensuring local development uses the latest code.

### Library Package (`packages/vue-bezier`)

**Component Organization:**
- `src/components/` contains all transition components organized by type
- Two architectural styles coexist:
  - **V1-style** (legacy): Uses CSS `@keyframes` animations (e.g., `FadeTransition`, `ScaleTransition`)
  - **V2-style** (modern): Uses CSS custom properties for dynamic timing (e.g., `BlurTransition`, `DissolveTransition`)
- All components share the same prop interface for consistency

**Key Files:**
- `src/main.ts` - Entry point; exports components and Vue plugin installer
- `src/composables/useHooks.ts` - Centralized lifecycle hook manager that handles `beforeEnter`, `beforeLeave`, `leave`, `afterEnter`, `afterLeave` events
- `src/composables/buildComponentType.ts` - Returns either `Transition` or `TransitionGroup` based on `group` prop
- `src/types/index.ts` - TypeScript definitions for component props

**Component Pattern:**
Each transition component follows this structure:
```vue
<script setup lang="ts">
import { buildComponentType, useHooks } from '@/composables'

const props = withDefaults(defineProps<ComponentProps>(), { /* defaults */ })
const emit = defineEmits<ComponentEvents>()

const componentType = buildComponentType(props) // Transition or TransitionGroup
const hooks = useHooks(props, emit)              // Lifecycle handlers
</script>

<template>
  <component :is="componentType" v-bind="{ ...$attrs, ...hooks }">
    <slot />
  </component>
</template>
```

**Build Process:**
1. `vue-tsc -p tsconfig.build.json` - Generates TypeScript declarations to `dist/types/`
2. `vite build` - Bundles components into single ES module `dist/vue-bezier.js` and extracts styles to `dist/style.css`
3. `vue-docgen-web-types` - Generates IDE autocomplete metadata (`dist/web-types.json`)

**Distribution:**
- ES modules only (no CommonJS)
- Vue is an external peer dependency
- Styles are separate: users import with `import '@noction/vue-bezier/styles'`

### Demo Package (`packages/demo`)

**Purpose:** Interactive showcase organized into three sections:
- **Appear** - Transitions for single elements entering/leaving
- **Between** - Transitions between two elements
- **List** - TransitionGroup demos with insert/shuffle/remove

**Key Architecture:**
- Uses Vue Router with nested routes for each demo page
- Global state management via Vue's `provide`/`inject` API (see `src/types/symbols.ts`)
- `DemoTransition.vue` wrapper handles single/group mode toggle and duration controls
- Tailwind CSS for styling, Prism.js for code syntax highlighting

**Build Output:**
Builds to `../docs/` directory (configured in `vite.config.ts` with `--base=./`) for GitHub Pages deployment.

### Shared Conventions

**Props Interface:**
All transition components accept:
- `duration` - Number (applies to both enter/leave) or `{enter: number, leave: number}`
- `delay` - Number (applies to both enter/leave) or `{enter: number, leave: number}`
- `group` - Boolean (use TransitionGroup for lists)
- `tag` - String (HTML tag for TransitionGroup wrapper, default: 'span')
- `origin` - String (CSS transform-origin value)
- `styles` - Object (custom CSS styles applied during transition)

**Timing Normalization:**
The `getTimingValue()` helper in `useHooks.ts` normalizes `duration`/`delay` props:
```typescript
getTimingValue(300) → { enter: 300, leave: 300 }
getTimingValue({enter: 200, leave: 400}) → { enter: 200, leave: 400 }
```

**Group Transitions:**
- When `group={true}`, components use `TransitionGroup` instead of `Transition`
- The `leave` hook applies absolute positioning to prevent layout jumps
- Move animations are defined via CSS classes (e.g., `.fade-move`, `.scale-move`)
- Move durations cannot be configured via props; override CSS classes to customize

**CSS Naming:**
- V1 classes: `.noc-{effect}-enter-active`, `.noc-{effect}-leave-active`, `.noc-{effect}-move`
- V2 classes: `.{effect}-enter-active`, `.{effect}-enter-from`, `.{effect}-leave-to`, etc.
- CSS variables: `--transition-enter-duration`, `--transition-leave-duration`

## Working with Transitions

### Adding a New Transition Component

1. Create component file in appropriate directory:
   - V1-style: `src/components/v1-style/{Category}/{EffectName}Transition.vue`
   - V2-style: `src/components/v2-style/{EffectName}Transition.vue`

2. Follow the established pattern (see Architecture > Component Pattern above)

3. Export from `src/components/index.ts`:
   ```typescript
   export { default as NewTransition } from './path/to/NewTransition.vue'
   ```

4. Add tests in `tests/unit/components/{Category}/` with snapshots

5. Update demo by creating a demo page in `packages/demo/src/pages/{section}/`

### Modifying Existing Transitions

- V1 transitions: Modify `@keyframes` animations and animation classes
- V2 transitions: Modify CSS transition properties and custom property definitions
- Both: The `useHooks` composable handles timing; avoid duplicating logic in components

### Testing Strategy

Tests use `@vue/test-utils` with vitest in jsdom environment:
- Test component mounting and prop handling
- Verify lifecycle hooks are called correctly
- Snapshot testing for rendered output
- Test both single and group modes

Run tests with:
```bash
pnpm -F vue-bezier test
```

## Important Notes

- The library uses **Vue 3 Composition API** exclusively; no Options API
- All transitions are **CSS-based** (no JavaScript animations); the `useHooks` composable only manages timing and styling
- TypeScript is required; maintain type safety throughout
- The demo must work with the local workspace version during development
- Styles are **scoped** in components but extracted to a global stylesheet during build
- Move transitions for groups default to `.3s` or `.35s`; users override by redefining CSS classes

## Package Manager

This project uses **pnpm**. Always use `pnpm` commands, not `npm` or `yarn`.

## CI/CD

GitHub Actions workflow (`.github/workflows/`) handles:
- Testing on push/PR
- Building and deploying demo to GitHub Pages on main branch
- Coverage reporting to Codecov
