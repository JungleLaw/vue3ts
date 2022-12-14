/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-12-16 15:18:31
 * @ Description:
 */

import ThemeEnum from '../themeEnum';
import type ISettings from './iSettings';

const Settings: ISettings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: '工程模板',
	theme: ThemeEnum.Classic,
	fullScreen: false,
};

export default Settings;
