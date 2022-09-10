/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 15:30:47
 * @ Description:
 *
 * @format
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/lifecycle',
		name: 'Lifecycle',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/lifecycle.vue'),
	},
	{
		path: '/ref',
		name: 'Ref',
		component: () => import('../views/Ref.vue'),
	},
	{
		path: '/fragment',
		name: 'Fragment',
		component: () => import('../views/Fragment.vue'),
	},
	{
		path: '/render',
		name: 'Render',
		component: () => import('../views/Render.vue'),
	},
	{
		path: '/ts',
		name: 'TypeScript',
		component: () => import('../views/TypeScript.vue'),
	},
];

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHistory(),
	routes: routes,
});

export default router;
