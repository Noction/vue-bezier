<template>
  <div id="transitions-list">
    <nav class="flex h-full flex-col justify-center px-8 pb-10">
      <ul>
        <li>
          <h5 class="mb-10 text-xl font-semibold lg:mb-3">Transitions List</h5>
          <ul class="border-l border-slate-100">
            <li
              v-for="transition in transitions"
              :key="transition"
              class="group -ml-px flex cursor-pointer items-center justify-between border-l pt-2 pl-4"
            >
              <span
                class="group-hover:border-slate-400 group-hover:text-slate-900"
                :class="{
                  'border-current font-semibold text-sky-500':
                    transition === transitionType
                }"
                @click="transitionType = transition"
                v-text="transition"
              />
              <span
                class="select-none rounded border border-slate-300 px-2 py-0.5 text-xs text-slate-300 opacity-0 transition-opacity transition-colors hover:border-slate-500 hover:text-slate-500 group-hover:opacity-100 dark:border-white/5"
                @click="
                  isSelected(transition)
                    ? removeTransition(transition)
                    : addTransition(transition)
                "
              >
                {{ isSelected(transition) ? '- Remove' : '+ Add' }}
              </span>
              <span
                class="mark h-2 w-2 rounded bg-sky-500"
                :class="[
                  isSelected(transition) ? 'block group-hover:hidden' : 'hidden'
                ]"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { TransitionType } from '../../types/transitionInfo'
import { injectStrict } from '../../utils'
import { TransitionBundleKey, TransitionInfoKey } from '../../types/symbols'

const { transitionType } = injectStrict(TransitionInfoKey)
const { transitionsList, addTransition, removeTransition } =
  injectStrict(TransitionBundleKey)

const transitions: TransitionType[] = [
  'FadeTransition',
  'SlideXLeftTransition',
  'SlideXRightTransition',
  'SlideYDownTransition',
  'SlideYUpTransition',
  'ZoomCenterTransition',
  'ZoomUpTransition',
  'ZoomXTransition',
  'ZoomYTransition',
  'ScaleTransition',
  'CollapseTransition'
]

const isSelected = (anim: TransitionType) =>
  transitionsList.value.includes(anim)
</script>
