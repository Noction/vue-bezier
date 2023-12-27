import { ComponentProps } from '@/types'
import { Component, Transition, TransitionGroup } from 'vue'

export default (props: ComponentProps): Component =>
  props.group ? TransitionGroup : Transition
