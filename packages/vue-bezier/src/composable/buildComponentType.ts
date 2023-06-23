import { Component, Transition, TransitionGroup } from 'vue'

export default (props): Component =>
  props.group ? TransitionGroup : Transition
