import type { Ref } from 'vue'

export declare type TransitionGroup = boolean

export declare type TransitionInfo = {
  transitionGroup: Ref<TransitionGroup>
  transitionType: Ref<TransitionType>
}

export declare type TransitionType
  = | 'BlurTransition'
    | 'ClipPathTransition'
    | 'DissolveTransition'
    | 'FadeSlideTransition'
    | 'PushTransition'
    | 'RotateTransition'
    | 'ScaleTransition'
    | 'WipeTransition'
    | 'ZoomTransition'
