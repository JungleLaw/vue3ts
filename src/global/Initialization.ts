/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 15:55:25
 * @ Modified by: Captain
 * @ Modified time: 2022-09-19 23:03:53
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

		Logger.log('setup');
		Logger.log('setup', 111, 222);
		Logger.log('a%dbb', 111, 222);
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
