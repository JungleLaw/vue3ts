/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 14:50:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-21 01:07:12
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
};
class Logger {
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
				// tslint:disable-next-line:no-console
				fn = console.info;
				break;
			case Logger.Type.Warn:
				// tslint:disable-next-line:no-console
				fn = console.warn;
				break;
			case Logger.Type.Error:
				// tslint:disable-next-line:no-console
				fn = console.error;
				break;
			case Logger.Type.Debug:
				// tslint:disable-next-line:no-console
				fn = console.debug;
				break;
			case Logger.Type.Track:
				// tslint:disable-next-line:no-console
				fn = console.trace;
				break;
			default:
				// tslint:disable-next-line:no-console
				fn = console.log;
		}

		const stack = getStackTrace() || '';
		// console.log('stack', stack);
		const matchResult = stack.match(/\(.*?\)/g) || [];
		// console.log('matchResult', matchResult);
		let line = matchResult[2] || '';
		// console.log('line', line);
		if (line) {
			line = line.substring(1, line.length - 1);
		}
		// tslint:disable-next-line:no-console
		console.group(`%c${tag}%c %s`, style(type['color']), '', `@ ${line}`);
		// console.group(`%c${tag}%c @ %s`, style(type['color']), '', getSourceLink());
		if (typeof msg === 'string') {
			// if (msg.includes('%')) {
			// 	fn(msg, ...optionalParams);
			// } else {
			fn(msg, ...optionalParams);
			// }
		} else {
			fn(`%c${msg}%o`, `text-align: start;font-size: 14px;color:${type['color']};`, msg, ...optionalParams);
		}
		// tslint:disable-next-line:no-console
		console.groupEnd();
		// if (typeof msg === 'string' && msg.includes('%')) {
		// 	fn(`%c${tag} %c ${msg} `, style(type['color']), '', ...optionalParams);
		// } else {
		// 	fn(`%c${tag} %c %o `, style(type['color']), '', msg, ...optionalParams);
		// }
	}
}

export default Logger;
