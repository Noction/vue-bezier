import VueBezier from '@noction/vue-bezier'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/tailwind.css'
import '@noction/vue-bezier/styles'

const app = createApp(App)

app.use(VueBezier)
app.use(router)
app.mount('#app')
