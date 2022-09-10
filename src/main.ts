/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 11:12:17
 * @ Description:
 * @format
 */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
app.config.errorHandler = () => {
	console.log('app error');
};
app.use(createPinia());
app.use(router);
console.log(app.config);
app.use(ElementPlus);
app.mount('#app');
