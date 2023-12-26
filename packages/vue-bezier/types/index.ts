import { RendererElement } from 'vue'

export type Events = {
    'after-enter': [el: RendererElement],
    'after-leave': [el: RendererElement],
    'before-enter': [el: RendererElement],
    'before-leave': [el: RendererElement],
    'leave': [el: RendererElement, done: () => void]
}
