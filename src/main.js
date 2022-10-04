import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import axios from '@/plugins/axiosInstance.js'
import "lib-flexible/flexible.js"
import './mock/index.js'

const app=createApp(App);

app.config.globalProperties.$axios=axios;
app.use(router);
app.mount('#app');
//createApp(App).use(store).use(router).mount('#app')
