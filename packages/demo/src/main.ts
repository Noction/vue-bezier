import './assets/tailwind.css'
import '@noction/vue-bezier/dist/style.css'
import App from './App.vue'
import VueBezier from '@noction/vue-bezier'
import { createApp } from 'vue'

const app = createApp(App)

app.use(VueBezier)
app.mount('#app')
