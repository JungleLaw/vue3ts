/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-09-18 13:48:03
 * @ Description:
 */

import pkgj from '../../package.json';
import { ThemeEnum } from './Enum';

interface ISettings {
	projectName: string;
	theme: ThemeEnum;
}

const Settings: ISettings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: pkgj.name,
	theme: ThemeEnum.Classic,
};

export default Settings;
