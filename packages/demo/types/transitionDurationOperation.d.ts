export declare type DecrementDelay = () => void
export declare type DecrementEnter = () => void
export declare type DecrementLeave = () => void
export declare type IncrementDelay = () => void
export declare type IncrementEnter = () => void
export declare type IncrementLeave = () => void

export declare interface TransitionDurationOperation {
  decrementDelay: DecrementDelay
  decrementEnter: DecrementEnter
  decrementLeave: DecrementLeave
  incrementDelay: IncrementDelay
  incrementEnter: IncrementEnter
  incrementLeave: IncrementLeave
}
