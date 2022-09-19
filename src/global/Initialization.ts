/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 15:55:25
 * @ Modified by: Captain
 * @ Modified time: 2022-09-18 17:21:54
 * @ Description:
 */

import { App } from 'vue';
import Logger from '@/global/Logger';
import Theme from '@/global/Theme';
import Settings from '@/global/Settings';

export default class Initialization {
	public static setup(app: App) {
		// process.env.VITE_LOGGER_DEBUG;
		// console.log(__APP_ENV__);
		// console.log('a%dbb', 1);
		// console.log('Tag', process);
		// console.log('=========');

		Logger.log('a%dbb', 1);
		Logger.info('Tag', window.document);
		Logger.error('Tag', window.document);
		Logger.warn('Tag', window.document);
		Logger.debug('Tag', window.document);
		Logger.track('Tag', window.document);
		Theme.setupTheme();
		app.config.errorHandler = () => {
			Logger.log('app error');
		};
		app.config.globalProperties.$settings = Settings;
	}
	private constructor() {
		throw new Error('cannot excute private constructor');
	}
}
