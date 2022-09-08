/** @format */

import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	console.log('command', command);
	// console.log('mode', mode);
	const root = process.cwd();
	// console.log('process.env', process.env.APP_ENV);
	// console.log('root', root);
	const env = loadEnv(mode, root, ''); // 环境变量对象
	console.log('环境变量------ %s', env.APP_ENV);
	// console.log('文件路径（ process.cwd()）------', root);
	// console.log('文件路径（dirname）------', __dirname + '/src');
	// console.log('import.meta.url', import.meta.url);
	return {
		plugins: [vue(), vueJsx()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			host: true,
			port: 1234,
			https: false,
			open: false,
		},
	};
});
