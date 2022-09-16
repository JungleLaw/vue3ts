/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:28:59
 * @ Modified by: Captain
 * @ Modified time: 2022-09-16 17:03:08
 * @ Description:
 */

import pkgj from '../../package.json';
import { ThemeEnum } from './enum';

interface Settings {
	projectName: string;
	theme: ThemeEnum;
}

export const Settings: Settings = {
	// .replace(/-/g, '_').toUpperCase()
	projectName: pkgj.name,
	theme: ThemeEnum.Classic,
};
