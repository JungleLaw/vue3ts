/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 15:55:25
 * @ Modified by: Captain
 * @ Modified time: 2022-09-17 18:08:56
 * @ Description:
 */

import { App } from 'vue';
import Logger from '@/global/Logger';
import Theme from '@/global/Theme';
import Settings from '@/global/settings';

export default class Initialization {
	public static setup(app: App) {
		// process.env.VITE_LOGGER_DEBUG;
		Logger.info('Tag', process, 'aabbcc');
		Theme.setupTheme();
		app.config.errorHandler = () => {
			Logger.info('Tag', 'app error');
		};
		app.config.globalProperties.$settings = Settings;
	}
	private constructor() {
		throw new Error('cannot excute private constructor');
	}
}
