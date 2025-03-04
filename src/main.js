import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)  // 1) Create the app instance
app.use(router)             // 2) Tell Vue to use the router
app.mount('#app')           // 3) Mount the app