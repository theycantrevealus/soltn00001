import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeng/resources/primeng.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/tnsol.css'
import 'nprogress/nprogress.css'
createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .use(PerfectScrollbar)
  .mount('#app')
