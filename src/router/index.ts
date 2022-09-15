/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-16 01:48:40
 * @ Description:
 *
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

const basicRoutes: RouteRecordRaw[] = [
	{
		path: '',
		name: 'default',
		redirect: '/login',
	},
	{
		path: '/',
		name: 'slash',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/system/Login.vue'),
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/system/Home.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		component: Layout,
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('../views/system/NotFound.vue'),
	},
];
const router = createRouter({
	// 创建一个 hash 历史记录
	history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
	// 是否应该禁止尾部斜杠。默认为假
	strict: true,
	// 应该添加到路由的初始路由列表。
	routes: basicRoutes,
});

export default router;
