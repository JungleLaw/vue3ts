/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 14:50:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-19 00:58:40
 * @ Description:
 */
const style = (color: string) => {
	return `background:${color}; padding: 2px 10px; border-radius: 3px;  color: #fff; font-size: 16px;`;
};
const getStackTrace = () => {
	const obj = {};
	Error.captureStackTrace(obj, getStackTrace);
	return obj['stack'];
};

const getSourceLink = () => {
	const url: URL = new URL(window.location.href);
	url.href = 'https://www.163.com';
	return url;
	// const link: Element = document.createElement('a');
	// const newContent = document.createTextNode('Hi there and greetings!');
	// link.appendChild(newContent);
	// return link;
};
class Logger {
	private static readonly drop: boolean = process['DROP_LOG'];
	// private static readonly drop: boolean = false;
	private static readonly Type = {
		Default: { value: 0, color: '#1DD300' },
		Info: { value: 1, color: '#02C6E1' },
		Warn: { value: 2, color: '#FF8613' },
		Error: { value: 3, color: '#FE0C1E' },
		Debug: { value: 4, color: '#35495e' },
		Track: { value: 5, color: '#3B1946' },
	};
	private static print(type: object, tag: string, msg: any, ...optionalParams: any[]) {
		if (Logger.drop) return;
		let fn: Function;
		switch (type) {
			case Logger.Type.Info:
				fn = console.info;
				break;
			case Logger.Type.Warn:
				fn = console.warn;
				break;
			case Logger.Type.Error:
				fn = console.error;
				break;
			case Logger.Type.Debug:
				fn = console.debug;
				break;
			case Logger.Type.Track:
				fn = console.trace;
				break;
			default:
				fn = console.log;
		}

		const stack = getStackTrace() || '';
		// console.log('stack', stack);
		const matchResult = stack.match(/\(.*?\)/g) || [];
		// console.log('matchResult', matchResult);
		let line = matchResult[matchResult.length - 1] || '';
		// console.log('line', line);
		if (line) {
			line = line.substring(1, line.length - 1);
		}
		console.group(`%c${tag}%c %s`, style(type['color']), '', `@ ${line}`);
		// console.group(`%c${tag}%c @ %s`, style(type['color']), '', getSourceLink());
		if (typeof msg === 'string' && msg.includes('%')) {
			fn(`${msg}`, ...optionalParams);
		} else {
			fn(`%c${msg}%o`, `text-align: start;font-size: 14px;color:${type['color']};`, msg, ...optionalParams);
		}
		console.groupEnd();
		// if (typeof msg === 'string' && msg.includes('%')) {
		// 	fn(`%c${tag} %c ${msg} `, style(type['color']), '', ...optionalParams);
		// } else {
		// 	fn(`%c${tag} %c %o `, style(type['color']), '', msg, ...optionalParams);
		// }
	}
	/**
	 *
	 * @param tag
	 * @param msg
	 * @param args
	 */
	public static log(msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Default, 'Log', msg, ...optionalParams);
	}
	public static info(tag: string = 'Log info', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Info, tag, msg, ...optionalParams);
	}
	public static warn(tag: string = 'Log warn', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Warn, tag, msg, ...optionalParams);
	}
	public static error(tag: string = 'Log error', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Error, tag, msg, ...optionalParams);
	}
	public static debug(tag: string = 'Log debug', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Debug, tag, msg, ...optionalParams);
	}
	public static track(tag: string = 'Log track', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Track, tag, msg, ...optionalParams);
	}
}

export default Logger;
