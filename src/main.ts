import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeng/resources/primeng.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount('#app')
