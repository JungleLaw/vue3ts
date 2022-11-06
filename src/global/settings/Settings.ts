/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-11-07 05:07:32
 * @ Description:
 */

import ThemeEnum from '../ThemeEnum';
import type ISettings from './ISettings';

const Settings: ISettings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: '工程模板',
	theme: ThemeEnum.Classic,
	fullScreen: false,
};

export default Settings;
