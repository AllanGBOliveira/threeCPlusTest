import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './plugins/i18nConfig'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './plugins/fontAwesomeConfig'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
