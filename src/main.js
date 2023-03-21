import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComponents from './components/index'

// import './assets/main.css'

const app = createApp(App)

app
    .use(router)
    .use(globalComponents)
    .mount('#app')
