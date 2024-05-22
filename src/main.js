import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import { router } from './routes/routes.js'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import './style.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(Quasar)
app.use(router)
app.use(pinia)

app.mount('#app')