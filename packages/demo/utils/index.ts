import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)

  if (!resolved) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    throw new Error(`Could not resolve ${key.description}`)
  }

  return resolved
}
