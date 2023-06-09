import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import NaiveUI from 'naive-ui'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(NaiveUI)
app.use(router)

app.mount('#app')
