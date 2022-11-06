/**
 * @ Author: Captain
 * @ Create Time: 2022-11-07 04:59:01
 * @ Modified by: Captain
 * @ Modified time: 2022-11-07 05:07:10
 * @ Description:
 */

import type ThemeEnum from '../ThemeEnum';

interface ISettings {
	projectName: string;
	theme: ThemeEnum;
	fullScreen: Boolean;
}
export default ISettings;
