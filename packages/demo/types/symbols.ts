import type { InjectionKey } from 'vue'
import type { TransitionBundle } from './transitionBundle'
import type { TransitionInfo } from './transitionInfo'

export const TransitionBundleKey: InjectionKey<TransitionBundle>
  = Symbol('transitionBundle')

export const TransitionInfoKey: InjectionKey<TransitionInfo>
  = Symbol('transitionInfo')
