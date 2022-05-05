import './assets/tailwind.css'
import 'vue3-sfc-transitions/dist/style.css'
import App from './App.vue'
import Vue3SFCTransitions from 'vue3-sfc-transitions'
import { createApp } from 'vue'

const app = createApp(App)

app.use(Vue3SFCTransitions, { casing: 'PascalCase' })
app.mount('#app')
