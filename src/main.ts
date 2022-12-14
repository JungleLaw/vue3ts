/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-17 16:40:02
 * @ Modified by: Captain
 * @ Modified time: 2022-11-07 06:46:03
 *
 */

import { createApp } from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './style/index.scss';

import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App';
import router from './router';
import Initialization from './global/initialization';

const bootstrap: VoidFunction = async () => {
	const app = createApp(App);
	await Initialization.setup(app);

	app.use(createPinia());
	app.use(router);
	// console.log(app.config);
	app.use(ElementPlus, { zIndex: 9999 });
	// setTimeout(() => {
	app.mount('#app');
	// }, 2000);
};

bootstrap();
