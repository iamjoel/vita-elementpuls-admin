import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import ElementUI from './plugins/elementui'

const app = createApp(App)
//pinia
const pinia = createPinia()


app
.use(pinia)
.use(ElementUI)
.use(router)
.mount('#app')
