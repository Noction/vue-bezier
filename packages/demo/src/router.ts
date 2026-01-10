import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: 'appear',
        components: {
          default: () => import('./pages/AppearPage.vue'),
          nav: () => import('./components/appear/AppearNav.vue'),
          controls: () => import('./components/appear/AppearControls.vue'),
        },
        alias: [''],
        redirect: { name: 'appear-dissolve' },
        children: [
          { name: 'appear-dissolve', path: 'dissolve', component: () => import('./pages/appear/index.vue'), props: { component: 'DissolveTransition', label: 'DissolveTransition' } },
          { name: 'appear-fade', path: 'fade', component: () => import('./pages/appear/index.vue'), props: { component: 'FadeTransition', label: 'FadeTransition' } },
          { name: 'appear-push', path: 'push', component: () => import('./pages/appear/index.vue'), props: { component: 'PushTransition', label: 'PushTransition' } },
          { name: 'appear-fade-slide', path: 'fade-slide', component: () => import('./pages/appear/index.vue'), props: { component: 'FadeSlideTransition', label: 'FadeSlideTransition' } },
          { name: 'appear-blur', path: 'blur', component: () => import('./pages/appear/index.vue'), props: { component: 'BlurTransition', label: 'BlurTransition' } },
          { name: 'appear-scale', path: 'scale', component: () => import('./pages/appear/index.vue'), props: { component: 'ScaleTransition', label: 'ScaleTransition', origin: 'center' } },
        ],
      },
      {
        path: 'between',
        components: {
          default: () => import('./pages/BetweenPage.vue'),
          nav: () => import('./components/between/BetweenNav.vue'),
          controls: () => import('./components/between/BetweenControls.vue'),
        },
        redirect: { name: 'between-dissolve' },
        children: [
          { name: 'between-dissolve', path: 'dissolve', component: () => import('./pages/between/index.vue'), props: { component: 'DissolveTransition', labelA: 'DissolveTransition A', labelB: 'DissolveTransition b' } },
          { name: 'between-fade', path: 'fade', component: () => import('./pages/between/index.vue'), props: { component: 'FadeTransition', labelA: 'FadeTransition', labelB: 'FadeTransition' } },
          { name: 'between-push', path: 'push', component: () => import('./pages/between/index.vue'), props: { component: 'PushTransition', labelA: 'PushTransition A', labelB: 'PushTransition b' } },
          { name: 'between-fade-slide', path: 'fade-slide', component: () => import('./pages/between/index.vue'), props: { component: 'FadeSlideTransition', labelA: 'FadeSlideTransition A', labelB: 'FadeSlideTransition b' } },
          { name: 'between-blur', path: 'blur', component: () => import('./pages/between/index.vue'), props: { component: 'BlurTransition', labelA: 'BlurTransition a', labelB: 'BlurTransition b' } },
          { name: 'between-scale', path: 'scale', component: () => import('./pages/between/index.vue'), props: { component: 'ScaleTransition', labelA: 'ScaleTransition', labelB: 'ScaleTransition', origin: 'center' } },
          { name: 'between-zoom', path: 'zoom', component: () => import('./pages/between/index.vue'), props: { component: 'ZoomTransition', labelA: 'ZoomTransition a', labelB: 'ZoomTransition b' } },
          { name: 'between-wipe', path: 'wipe', component: () => import('./pages/between/index.vue'), props: { component: 'WipeTransition', labelA: 'WipeTransition a', labelB: 'WipeTransition b' } },
          { name: 'between-rotate', path: 'rotate', component: () => import('./pages/between/index.vue'), props: { component: 'RotateTransition', labelA: 'RotateTransition a', labelB: 'RotateTransition b' } },
          { name: 'between-clip-path', path: 'clip-path', component: () => import('./pages/between/index.vue'), props: { component: 'ClipPathTransition', labelA: 'ClipPathTransition a', labelB: 'ClipPathTransition b' } },
        ],
      },
      {
        path: 'list',
        components: {
          default: () => import('./pages/ListPage.vue'),
          nav: () => import('./components/list/ListNav.vue'),
          controls: () => import('./components/list/ListControls.vue'),
        },
        redirect: { name: 'list-dissolve' },
        children: [
          { name: 'list-dissolve', path: 'dissolve', component: () => import('./pages/list/index.vue'), props: { component: 'DissolveListTransition' } },
          { name: 'list-scale', path: 'scale', component: () => import('./pages/list/index.vue'), props: { component: 'ScaleListTransition' } },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
