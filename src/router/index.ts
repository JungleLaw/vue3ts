/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-26 00:10:15
 * @ Description:
 *
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

interface Visible {
	visible: boolean;
}

type RouterItem = RouteRecordRaw & Visible;

const basicRoutes: RouterItem[] = [
	{
		path: '',
		name: 'default',
		redirect: '/login',
		visible: false,
	},
	{
		path: '/',
		name: 'slash',
		redirect: '/login',
		visible: false,
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/system/Login.vue'),
		visible: false,
	},
	{
		path: '/home',
		name: 'Home',
		component: Layout,
		redirect: '/home/index',
		visible: true,
		children: [
			{
				path: 'index',
				name: 'Home',
				component: () => import('../views/system/Home.vue'),
			},
		],
	},
	{
		path: '/layout',
		name: 'Layout',
		component: Layout,
		visible: true,
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('../views/system/NotFound.vue'),
		visible: true,
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
