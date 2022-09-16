/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-12 21:11:33
 * @ Modified by: Captain
 * @ Modified time: 2022-09-16 17:15:10
 *
 */

import { createApp } from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './style/index.scss';

import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { Settings } from '@/global/settings';
import { Theme } from '@/global/theme';

Theme.setupTheme();
console.log('main theme', Theme.getTheme());
console.log('main settings', Settings);

const app = createApp(App);
app.config.errorHandler = () => {
	console.log('app error');
};
app.use(createPinia());
app.use(router);
console.log(app.config);
app.use(ElementPlus, { zIndex: 9999 });
app.mount('#app');
