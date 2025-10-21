import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import route from './router'

createApp(App).use(route).use(ElementPlus).mount('#app')
