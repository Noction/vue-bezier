import { Ref } from 'vue'

export declare type TransitionDelay = number
export declare interface TransitionDuration {
  enter: number
  leave: number
}
export declare type TransitionGroup = boolean

export declare type TransitionInfo = {
  transitionDelay: Ref<TransitionDelay>
  transitionDuration: Ref<TransitionDuration>
  transitionGroup: Ref<TransitionGroup>
  transitionType: Ref<TransitionType>
}

export declare type TransitionType =
  | 'FadeTransition'
  | 'SlideXLeftTransition'
  | 'SlideXRightTransition'
  | 'SlideYDownTransition'
  | 'SlideYUpTransition'
  | 'ZoomCenterTransition'
  | 'ZoomUpTransition'
  | 'ZoomXTransition'
  | 'ZoomYTransition'
  | 'ScaleTransition'
  | 'CollapseTransition'
