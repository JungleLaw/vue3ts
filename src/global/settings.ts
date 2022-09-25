/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-09-25 01:41:05
 * @ Description:
 */

import { ThemeEnum } from './Enum';

interface ISettings {
	projectName: string;
	theme: ThemeEnum;
}

const Settings: ISettings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: '工程模板',
	theme: ThemeEnum.Classic,
};

export default Settings;
