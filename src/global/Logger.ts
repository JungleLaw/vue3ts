/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 14:50:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-18 14:05:52
 * @ Description:
 */
const style = (color: string) => {
	return `background:${color}; padding: 2px 10px; border-radius: 3px;  color: #fff; font-size: 16px;`;
};
class Logger {
	private static readonly drop: boolean = process['DROP_LOG'];
	// private static readonly drop: boolean = false;
	private static readonly Type = {
		Default: { value: 0, color: '#41b883' },
		Info: { value: 1, color: 'blue' },
		Warn: { value: 2, color: 'orange' },
		Error: { value: 3, color: 'red' },
		Debug: { value: 4, color: '#35495e' },
		Track: { value: 5, color: '#001528' },
	};
	private static print(type: object, tag: string, msg: any, ...optionalParams: any[]) {
		if (Logger.drop) return;

		// 'abc' + `%o`,
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
		// console.group(`%c${tag}`, style(type['color']));
		// fn(msg, ...optionalParams);
		// console.groupEnd();
		if (typeof msg === 'string' && msg.includes('%')) {
			fn(`%c${tag} %c ${msg} `, style(type['color']), '', ...optionalParams);
		} else {
			fn(`%c${tag} %c %o `, style(type['color']), '', msg, ...optionalParams);
		}
	}
	/**
	 *
	 * @param tag
	 * @param msg
	 * @param args
	 */
	public static log(msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Default, 'Logger', msg, ...optionalParams);
	}
	public static info(tag: string = 'Logger info', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Info, tag, msg, ...optionalParams);
	}
	public static warn(tag: string = 'Logger warn', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Warn, tag, msg, ...optionalParams);
	}
	public static error(tag: string = 'Logger error', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Error, tag, msg, ...optionalParams);
	}
	public static debug(tag: string = 'Logger debug', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Debug, tag, msg, ...optionalParams);
	}
	public static track(tag: string = 'Logger track', msg: any, ...optionalParams: any[]) {
		Logger.print(Logger.Type.Track, tag, msg, ...optionalParams);
	}
}

export default Logger;
