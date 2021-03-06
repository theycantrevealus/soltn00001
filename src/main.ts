import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
// import * as Sentry from '@sentry/vue'
// import { Integrations } from '@sentry/tracing'
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
import CKEditor from '@ckeditor/ckeditor5-vue'

// Modular
import { registerModules } from '@/modules/register'
import User from '@/modules/user'
import Service from '@/modules/service'
import MasterItem from '@/modules/master_item'
import MasterTour from '@/modules/master_tour'
registerModules({
  accountModule: User,
  serviceModule: Service,
  masterItemModule: MasterItem,
  masterTourModule: MasterTour
})

setupInterceptors()
declare global {
  interface Window {
    Cypress?: any;
    __app__?: any;
    __store__?: any;
  }
}

const app = createApp(App)

// Sentry.init({
//   app,
//   dsn: 'https://ccc158cc16aa4e1cba6149c59354b5b7@o970117.ingest.sentry.io/6073617',
//   integrations: [
//     new Integrations.BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
//     })
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0
// })

app.use(PrimeVue)
  .use(store)
  .use(router)
  .use(ToastService)
  .use(ConfirmationService)
  .use(PerfectScrollbar)
  .use(CKEditor)

app.mount('#app')

if (window.Cypress) {
  window.__app__ = app
  window.__store__ = store
}
