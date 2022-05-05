import { InjectionKey } from 'vue'
import { TransitionBundle } from './transitionBundle'
import { TransitionDurationOperation } from './transitionDurationOperation'
import { TransitionInfo } from './transitionInfo'

export const TransitionBundleKey: InjectionKey<TransitionBundle> =
  Symbol('transitionBundle')

export const TransitionDurationOperationKey: InjectionKey<TransitionDurationOperation> =
  Symbol('transitionDurationOperation')

export const TransitionInfoKey: InjectionKey<TransitionInfo> =
  Symbol('transitionInfo')
