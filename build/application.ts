/**
 * @ Author: Captain
 * @ Create Time: 2022-09-13 10:59:18
 * @ Modified by: Captain
 * @ Modified time: 2022-09-13 11:49:27
 * @ Description:
 *
 */

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, '\n');
		realName = realName === 'true' ? true : realName === 'false' ? false : realName;

		if (envName === 'VITE_PORT') {
			realName = Number(realName);
		}
		if (envName === 'VITE_PROXY' && realName) {
			try {
				realName = JSON.parse(realName.replace(/'/g, '"'));
			} catch (error) {
				realName = '';
			}
		}
		ret[envName] = realName;
		if (typeof realName === 'string') {
			process.env[envName] = realName;
		} else if (typeof realName === 'object') {
			process.env[envName] = JSON.stringify(realName);
		}
	}
	return ret;
}
