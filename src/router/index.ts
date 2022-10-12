/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-10-13 02:00:30
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
				meta: { title: 'Dashboard1', icon: 'dashboard1' },
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
		path: '/tsx',
		name: 'Tsx',
		component: Layout,
		redirect: '/tsx/index',
		visible: true,
		meta: { title: 'Tsx', icon: 'tsx' },
		children: [
			{
				path: 'index',
				name: 'Index',
				component: () => import('../views/tsx/Index'),
				visible: true,
				meta: { title: 'Index', icon: 'index' },
			},
			{
				path: 'test',
				name: 'Test',
				component: () => import('../views/tsx/Test'),
				visible: true,
				meta: { title: 'Test', icon: 'test' },
			},
			{
				path: 'mouse',
				name: 'Mouse',
				component: () => import('../views/tsx/Mouse'),
				visible: true,
				meta: { title: 'Mouse', icon: 'mouse' },
			},
			{
				path: 'emits',
				name: 'Emits',
				component: () => import('../views/tsx/Emits'),
				visible: true,
				meta: { title: 'Emits', icon: 'emits' },
			},
			{
				path: 'computed',
				name: 'Computed',
				component: () => import('../views/tsx/Computed'),
				visible: true,
				meta: { title: 'Computed', icon: 'computed' },
			},
			{
				path: 'watch',
				name: 'Watch',
				component: () => import('../views/tsx/Watch'),
				visible: true,
				meta: { title: 'Watch', icon: 'watch' },
			},
			{
				path: 'props',
				name: 'Props',
				component: () => import('../views/tsx/Props'),
				visible: true,
				meta: { title: 'Props', icon: 'props' },
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
