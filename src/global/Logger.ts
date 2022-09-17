/**
 * @ Author: Captain
 * @ Create Time: 2022-09-17 14:50:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-17 18:12:46
 * @ Description:
 */

const LOG_STYLE = 'font-size:20px;color:red;';

const log = (tag: string = 'Logger', msg: any, ...optionalParams: any[]) => {
	// tslint:disable-next-line:no-console
	console.log(`%c${tag}=>%o`, LOG_STYLE, msg, ...optionalParams);
};

class Logger {
	/**
	 *
	 * @param tag
	 * @param msg
	 * @param args
	 */
	// tag: string = 'Logger',
	public static info(tag: string, msg: any, ...optionalParams: any[]) {
		if (this.debug) {
			// tslint:disable-next-line:no-console
			log(tag, msg, ...optionalParams);
		}
	}
	public static setDebug(debug: boolean): void {
		this.debug = debug;
	}
	private static readonly Type = {
		Info: 1,
		Warn: 2,
		Error: 3,
		Debug: 4,
		Track: 5,
	};
	private static debug: boolean = process.debug;

	private static convert(msg: any): string {
		const type: string = typeof msg;
		switch (type) {
			case 'string':
				break;
			case 'number':
				break;
			case 'object':
				break;
			default:
		}
		return '';
	}
}

export default Logger;
