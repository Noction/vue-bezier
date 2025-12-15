import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: 'appear',
        component: () => import('./pages/AppearPage.vue'),
        alias: [''],
        redirect: { name: 'appear-dissolve' },
        children: [
          { name: 'appear-dissolve', path: 'dissolve', component: () => import('./pages/appear/DissolvePage.vue') },
          { name: 'appear-fade', path: 'fade', component: () => import('./pages/appear/FadePage.vue') },
          { name: 'appear-push', path: 'push', component: () => import('./pages/appear/PushPage.vue') },
          { name: 'appear-fade-slide', path: 'fade-slide', component: () => import('./pages/appear/FadeSlidePage.vue') },
          { name: 'appear-blur', path: 'blur', component: () => import('./pages/appear/BlurPage.vue') },
          { name: 'appear-scale', path: 'scale', component: () => import('./pages/appear/ScalePage.vue') },
        ],
      },
      {
        path: 'between',
        component: () => import('./pages/BetweenPage.vue'),
        redirect: { name: 'between-dissolve' },
        children: [
          { name: 'between-dissolve', path: 'dissolve', component: () => import('./pages/between/DissolvePage.vue') },
          { name: 'between-fade', path: 'fade', component: () => import('./pages/between/FadePage.vue') },
          { name: 'between-push', path: 'push', component: () => import('./pages/between/PushPage.vue') },
          { name: 'between-fade-slide', path: 'fade-slide', component: () => import('./pages/between/FadeSlidePage.vue') },
          { name: 'between-blur', path: 'blur', component: () => import('./pages/between/BlurPage.vue') },
          { name: 'between-scale', path: 'scale', component: () => import('./pages/between/ScalePage.vue') },
          { name: 'between-zoom', path: 'zoom', component: () => import('./pages/between/ZoomPage.vue') },
          { name: 'between-wipe', path: 'wipe', component: () => import('./pages/between/WipePage.vue') },
          { name: 'between-rotate', path: 'rotate', component: () => import('./pages/between/RotatePage.vue') },
          { name: 'between-clip-path', path: 'clip-path', component: () => import('./pages/between/ClipPathPage.vue') },
        ],
      },
      {
        path: 'list',
        component: () => import('./pages/ListPage.vue'),
        redirect: { name: 'list-dissolve' },
        children: [
          { name: 'list-dissolve', path: 'dissolve', component: () => import('./pages/list/DissolvePage.vue') },
          { name: 'list-fade', path: 'fade', component: () => import('./pages/list/FadePage.vue') },
          { name: 'list-scale', path: 'scale', component: () => import('./pages/list/ScalePage.vue') },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
