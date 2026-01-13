/// <reference types="vite/client" />

declare module '*.vue' {
  // eslint-disable-next-line ts/no-empty-object-type
  const component: DefineComponent<{}, {}, any>

  export default component
}
