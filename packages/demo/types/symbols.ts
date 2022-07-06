import { InjectionKey } from 'vue'
import { TransitionBundle } from './transitionBundle'
import { TransitionInfo } from './transitionInfo'

export const TransitionBundleKey: InjectionKey<TransitionBundle> =
  Symbol('transitionBundle')

export const TransitionInfoKey: InjectionKey<TransitionInfo> =
  Symbol('transitionInfo')
