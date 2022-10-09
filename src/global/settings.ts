/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-10-02 02:47:31
 * @ Description:
 */

import { ThemeEnum } from './Enum';

interface ISettings {
	projectName: string;
	theme: ThemeEnum;
	fullScreen: Boolean;
}

const Settings: ISettings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: '工程模板',
	theme: ThemeEnum.Classic,
	fullScreen: false,
};

export default Settings;
