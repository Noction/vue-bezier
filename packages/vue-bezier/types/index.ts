import { RendererElement } from 'vue'

export type Events = {
    'after-enter': [el: RendererElement],
    'after-leave': [el: RendererElement],
    'before-enter': [el: RendererElement],
    'before-leave': [el: RendererElement],
    'leave': [el: RendererElement, done: () => void]
}

type TransitionTimings = {
    enter: number;
    leave: number;
}

type Styles = {
    animationFillMode: string;
    animationTimingFunction: string;
}

type NumberOrTimings = number | TransitionTimings;

export type Props = {
    /**
     * Transition delay. Number for specifying the same delay for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    delay?: NumberOrTimings;

    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    duration?: NumberOrTimings;

    /**
     * Whether the component should be a `transition-group` component.
     */
    group?: boolean;

    /**
     * Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
     * Can be specified with styles as well but it's shorter with this prop
     */
    origin?: string;

    /**
     * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
     */
    styles?: Styles;

    /**
     * Transition tag, in case the component is a `transition-group`
     */
    tag?: string;
}
