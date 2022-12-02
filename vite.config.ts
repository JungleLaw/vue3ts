/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-12-01 11:49:48
 * @ Description:
 */

// import { fileURLToPath, URL } from 'node:url';

import pkg from './package.json';
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import RequireTransform from 'vite-plugin-require-transform';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { wrapperEnv } from './build/application';
import dayjs from 'dayjs';
import { internal } from './proxy';

const pathResolve = (dir: string): string => {
	return resolve(process.cwd(), '.', dir);
};
const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
	pkg: { dependencies, devDependencies, name, version },
	lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root, ''); // 环境变量对象
	// console.log('环境变量------ %s', env.APP_ENV);
	const viteEnv = wrapperEnv(env);
	// console.log('viteEnv', viteEnv);
	const { VITE_PUBLIC_PATH, VITE_OUTPUT_DIR, VITE_DROP_CONSOLE } = viteEnv;
	const isBuild = command === 'build';
	// console.log('VITE_DROP_CONSOLE', VITE_DROP_CONSOLE);
	// console.log('文件路径（ process.cwd()）------', root);
	// console.log('文件路径（dirname）------', __dirname + '/src');
	// console.log('import.meta.url', import.meta.url);
	return {
		base: VITE_PUBLIC_PATH,
		root,
		plugins: [
			vue(),
			vueJsx(),
			// ...
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
			RequireTransform({
				fileRegex: /.js$|.jsx$|.ts$|.tsx$|.vue$/,
			}),
		],
		resolve: {
			alias: {
				// '@': fileURLToPath(new URL('./src', import.meta.url)),
				'@': pathResolve('src') + '/',
				'#': pathResolve('types') + '/',
			},
		},
		server: {
			host: true,
			port: 1234,
			https: false,
			open: false,
			proxy: internal,
		},
		esbuild: {
			pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger', 'Logger'] : [],
		},
		build: {
			target: 'es2015',
			cssTarget: 'chrome80',
			outDir: VITE_OUTPUT_DIR,
			// minify: 'terser',
			/**
			 * 当 minify=“minify:'terser'” 解开注释
			 * Uncomment when minify="minify:'terser'"
			 */
			// terserOptions: {
			//   compress: {
			//     keep_infinity: true,
			//     drop_console: VITE_DROP_CONSOLE,
			//   },
			// },
			// Turning off brotliSize display can slightly reduce packaging time
			// brotliSize: false,
			chunkSizeWarningLimit: 2000,
		},
		define: {
			// setting vue-i18-next
			// Suppress warning
			__INTLIFY_PROD_DEVTOOLS__: false,
			__APP_INFO__: JSON.stringify(__APP_INFO__),
			__DROP_LOG__: VITE_DROP_CONSOLE,
		},
	};
});
