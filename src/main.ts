import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AuthLayout from '@/components/AuthLayout.vue'

import App from './App.vue'
import router from './router'
import AppLayout from '@/components/AppLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AuthLayout', AuthLayout)


app.mount('#app')
