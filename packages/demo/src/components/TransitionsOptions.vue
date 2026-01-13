<script setup lang="ts">
import type { TransitionType } from '../../types/transitionInfo'
import { TransitionBundleKey, TransitionInfoKey } from '../../types/symbols'
import { injectStrict } from '../../utils'

const { transitionType } = injectStrict(TransitionInfoKey)
const { transitionsList, addTransition, removeTransition }
  = injectStrict(TransitionBundleKey)

const transitions: TransitionType[] = [
  'DissolveTransition',
  'PushTransition',
  'FadeSlideTransition',
  'BlurTransition',
  'ScaleTransition',
  'ZoomTransition',
  'WipeTransition',
  'RotateTransition',
  'ClipPathTransition',
]

function isSelected(anim: TransitionType): boolean {
  return transitionsList.value.includes(anim)
}

function addBadge(anim: TransitionType): string {
  return isSelected(anim)
    ? 'before:content-[\'+\'] group-hover:before:content-[\'-\']'
    : 'before:content-[\'\']'
}

function optionSelected(anim: TransitionType) {
  isSelected(anim) ? removeTransition(anim) : addTransition(anim)
  transitionType.value = anim
}
</script>

<template>
  <div id="transitions-options">
    <select
      v-model="transitionType"
      class="mx-8 block rounded-full py-2 px-4 lg:hidden"
    >
      <option
        v-for="transition in transitions"
        :key="transition"
        :value="transition"
        v-text="transition"
      />
    </select>
    <nav class="hidden h-full flex-col justify-center px-8 pb-10 lg:flex">
      <ul>
        <li>
          <h5 class="mb-10 text-base font-semibold lg:mb-3 xl:text-xl">
            Transitions List
          </h5>
          <ul class="border-l border-slate-100">
            <li
              v-for="transition in transitions"
              :key="transition"
              class="group relative -ml-px flex cursor-pointer items-center justify-between border-l pt-2 pl-4"
              :class="{
                'border-current text-sky-500': transition === transitionType,
              }"
            >
              <span
                class="group-hover:border-slate-400"
                @click="optionSelected(transition)"
                v-text="transition"
              />
              <span
                class="mark before:absolute before:left-2 before:top-0 before:rounded before:text-sm before:font-bold before:text-sky-500"
                :class="[addBadge(transition)]"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
