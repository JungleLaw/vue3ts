/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-15 01:31:48
 * @ Description:
 *
 * @format
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// const routes: Array<RouteRecordRaw> = [
// 	{
// 		path: '/login',
// 		name: 'Login',
// 		component: () => import('../views/system/login.vue'),
// 	},
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: () => import('../views/Home.vue'),
// 	},
// 	{
// 		path: '/about',
// 		name: 'About',
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
// 	},
// 	{
// 		path: '/lifecycle',
// 		name: 'Lifecycle',
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () => import(/* webpackChunkName: "about" */ '../views/lifecycle.vue'),
// 	},
// 	{
// 		path: '/ref',
// 		name: 'Ref',
// 		component: () => import('../views/Ref.vue'),
// 	},
// 	{
// 		path: '/fragment',
// 		name: 'Fragment',
// 		component: () => import('../views/Fragment.vue'),
// 	},
// 	{
// 		path: '/render',
// 		name: 'Render',
// 		component: () => import('../views/Render.vue'),
// 	},
// 	{
// 		path: '/ts',
// 		name: 'TypeScript',
// 		component: () => import('../views/TypeScript.vue'),
// 	},
// 	{
// 		path: '/layout',
// 		name: 'Layout',
// 		component: () => import('../views/Layout.vue'),
// 	},
// 	{
// 		path: '/mouse',
// 		name: 'Mouse',
// 		component: () => import('../views/mouse.vue'),
// 	},
// ];
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
