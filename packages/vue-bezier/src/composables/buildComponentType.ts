import type { ComponentProps } from '@/types'
import type { Component } from 'vue'
import { Transition, TransitionGroup } from 'vue'

export default (props: ComponentProps): Component =>
  props.group ? TransitionGroup : Transition
