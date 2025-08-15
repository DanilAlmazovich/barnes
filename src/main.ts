import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import PrimeVue from 'primevue/config'
import primeVueOptions from "@/configs/primevue"
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, primeVueOptions)
app.use(ToastService)
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)

app.mount('#app')