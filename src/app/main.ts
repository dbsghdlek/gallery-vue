import globalPlugin from '@/app/plugins/global-plugin.ts'
import globalComponents from '@/app/plugins/global-components.ts'

import App from '../pages/App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(globalComponents)
app.use(globalPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

