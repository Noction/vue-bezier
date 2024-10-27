import type { Ref } from 'vue'

export declare type TransitionGroup = boolean

export declare interface TransitionInfo {
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
  | 'DissolveTransition'
  | 'PushTransition'
  | 'FadeSlideTransition'
  | 'BlurTransition'
