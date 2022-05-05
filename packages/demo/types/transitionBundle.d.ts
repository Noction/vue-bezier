import { Ref } from 'vue'
import { TransitionType } from './transitionInfo'

export declare type AddTransition = (el: TransitionType) => void
export declare type RemoveTransition = (el: TransitionType) => void
export declare interface TransitionBundle {
  addTransition: AddTransition
  removeTransition: RemoveTransition
  transitionsList: TransitionsList
}
export declare type TransitionsList = Ref<TransitionType[]>
