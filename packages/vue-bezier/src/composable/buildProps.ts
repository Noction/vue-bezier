const defaultProps = {
  /**
   * Transition delay. Number for specifying the same delay for enter/leave transitions
   * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
   */
  delay: {
    default: 0,
    type: [Number, Object]
  },
  /**
   * Transition duration. Number for specifying the same duration for enter/leave transitions
   * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
   */
  duration: {
    default: 300,
    type: [Number, Object]
  },
  /**
   * Whether the component should be a `transition-group` component.
   */
  group: Boolean,
  /**
   *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
   *  Can be specified with styles as well but it's shorter with this prop
   */
  origin: {
    default: '',
    type: String
  },
  /**
   * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
   */
  styles: {
    default: () => ({
      animationFillMode: 'both',
      animationTimingFunction: 'ease-out'
    }),
    type: Object
  },
  /**
   * Transition tag, in case the component is a `transition-group`
   */
  tag: {
    default: 'span',
    type: String
  }
}

export default (customProps?: Record<string, unknown>) => ({
  ...defaultProps,
  ...(customProps || {})
})
