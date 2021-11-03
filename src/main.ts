import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import setupInterceptors from '@/service/core/interceptor'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primeng/resources/primeng.min.css'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/tnsol.css'
import '@/assets/style/popconfirm.css'
import '@/assets/style/toolbar.css'
import '@/assets/style/table.css'
import '@/assets/style/modal.css'
import 'nprogress/nprogress.css'

// Modular
import { registerModules } from '@/modules/register'
import User from '@/modules/user'
registerModules({
  accountModule: User
})

setupInterceptors()

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .use(ToastService)
  .use(ConfirmationService)
  .use(PerfectScrollbar)
  .mount('#app')
