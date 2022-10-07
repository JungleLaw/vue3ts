/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-10-07 03:57:55
 * @ Description:
 *
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

interface Visible {
	visible: boolean;
}

type RouterItem = RouteRecordRaw &
	Visible & {
		children?: RouterItem[];
	};

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
		meta: { title: 'Home', icon: 'home' },
		children: [
			{
				path: 'index',
				name: 'HomeIndex',
				component: () => import('../views/system/Home.vue'),
				visible: true,
				meta: { title: 'Home', icon: 'home' },
			},
		],
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Layout,
		redirect: '/dashboard/index',
		visible: true,
		meta: { title: 'Dashboard', icon: 'dashboard' },
		children: [
			{
				path: 'index',
				name: 'DashboardIndex',
				component: () => import('../views/demo/Dashboard.vue'),
				visible: true,
				meta: { title: 'Dashboard', icon: 'dashboard' },
			},
			{
				path: 'index2',
				name: 'DashboardIndex2',
				component: () => import('../views/demo/Dashboard2.vue'),
				visible: true,
				meta: { title: 'Dashboard2', icon: 'dashboard2' },
			},
		],
	},
	{
		path: '/vue',
		name: 'Penetrate',
		component: Layout,
		redirect: '/vue/penetrate',
		visible: true,
		meta: { title: 'Vue', icon: 'vue' },
		children: [
			{
				path: 'penetrate',
				name: 'Penetrate',
				component: () => import('../views/vue/Penetrate.vue'),
				visible: true,
				meta: { title: 'Penetrate', icon: 'penetrate' },
			},
		],
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('../views/system/NotFound.vue'),
		visible: false,
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
