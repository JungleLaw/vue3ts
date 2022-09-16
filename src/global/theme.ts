/**
 * @ Author: Captain
 * @ Create Time: 2022-09-16 15:34:24
 * @ Modified by: Captain
 * @ Modified time: 2022-09-16 17:14:00
 * @ Description:
 */

import { Settings } from './settings';
import { ThemeEnum } from './enum';

const ThemeKey = `CURRENT_THEME_${Settings.projectName}`;
export function getTheme(): ThemeEnum {
	const currentTheme = localStorage.getItem(ThemeKey);

	return currentTheme ? (currentTheme as ThemeEnum) : Settings.theme;
}

export function setTheme(theme) {
	localStorage.setItem(ThemeKey, theme);
}

export function removeTheme() {
	localStorage.removeItem(ThemeKey);
}
/**
 * 动态切换主题
 *
 * @export
 * @param {*} element 目标元素
 * @param {*} className 主题包命名空间 如: light-theme dark-theme
 * @returns
 */
export function toggleClass(element, className): void {
	console.log('className', className);
	const el = element;
	if (!el || !className) {
		return;
	}
	let classString = el.className;
	console.log('classString', classString);
	const nameIndex = classString.indexOf(className);
	console.log('nameIndex', nameIndex);
	if (nameIndex === -1) {
		// classString += "" + className;
		if (classString) {
			classString = '';
			classString += `${className}`;
		} else {
			classString += `${className}`;
		}
		console.log('classString', classString);
	} else {
		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	}
	// Don’t Reassign Your Function Arguments 不要重新给函数参数赋值
	if (classString) {
		el.className = classString;
	}
}

export class Theme {
	static theme: ThemeEnum = getTheme();
	public static setupTheme(): void {
		console.log('theme', Theme.theme);
		toggleClass(document.body, this.theme);
	}
	public static getTheme(): ThemeEnum {
		return this.theme as ThemeEnum;
	}
}
