import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeng/resources/primeng.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'

createApp(App).use(store).use(router).mount('#app')
