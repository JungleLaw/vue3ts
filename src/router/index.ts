/**
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-12-16 11:07:52
 * @ Description:
 *
 */

import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/Layout.vue';
import type RouterItem from './router';

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
			{
				path: 'protoType',
				name: 'ProtoType',
				component: () => import('../views/demo/ProtoType.vue'),
				visible: true,
				meta: { title: 'ProtoType', icon: 'protoType' },
			},
			{
				path: 'backgroundattach',
				name: 'BackgroundAttach',
				component: () => import('../views/demo/BackgroundAttach.vue'),
				visible: true,
				meta: { title: 'BackgroundAttach', icon: 'backgroundattach' },
			},
			{
				path: 'grid',
				name: 'Grid',
				component: () => import('../views/demo/Grid.vue'),
				visible: true,
				meta: { title: 'Grid', icon: 'grid' },
			},
			{
				path: 'float',
				name: 'Float',
				component: () => import('../views/demo/Float.vue'),
				visible: true,
				meta: { title: 'Float', icon: 'float' },
			},
			{
				path: 'flex',
				name: 'Flex',
				component: () => import('../views/demo/Flex.vue'),
				visible: true,
				meta: { title: 'Flex', icon: 'flex' },
			},
			{
				path: 'media',
				name: 'Media',
				component: () => import('../views/demo/Media.vue'),
				visible: true,
				meta: { title: 'Media', icon: 'media' },
			},
			{
				path: 'geo',
				name: 'Geolocation',
				component: () => import('../views/demo/Geolocation.vue'),
				visible: true,
				meta: { title: 'Geolocation', icon: 'geolocation' },
			},
			{
				path: 'anchor',
				name: 'Anchor',
				component: () => import('../views/demo/Anchor.vue'),
				visible: true,
				meta: { title: 'Anchor', icon: 'anchor' },
			},
			{
				path: 'scrollView',
				name: 'ScrollView',
				component: () => import('../views/demo/ScrollView.vue'),
				visible: true,
				meta: { title: 'ScrollView', icon: 'scrollView' },
			},
		],
	},
	{
		path: '/vue',
		name: 'Vue',
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
			{
				path: 'pinia',
				name: 'Pinia',
				component: () => import('../views/vue/Pinia'),
				visible: true,
				meta: { title: 'Pinia', icon: 'pinia' },
			},
			{
				path: 'cookie',
				name: 'Cookie',
				component: () => import('../views/vue/Cookie.vue'),
				visible: true,
				meta: { title: 'Cookie', icon: 'cookie' },
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
			{
				path: 'setup',
				name: 'Setup',
				component: () => import('../views/tsx/Setup'),
				visible: true,
				meta: { title: 'Setup', icon: 'setup' },
			},
			{
				path: 'style',
				name: 'Style',
				component: () => import('../views/tsx/Style'),
				visible: true,
				meta: { title: 'Style', icon: 'style' },
			},
			{
				path: 'event',
				name: 'Event',
				component: () => import('../views/tsx/Event'),
				visible: true,
				meta: { title: 'Event', icon: 'event' },
			},
			{
				path: 'tevent',
				name: 'TEvent',
				component: () => import('../views/tsx/Event.vue'),
				visible: true,
				meta: { title: 'TEvent', icon: 'tevent' },
			},
			{
				path: 'lifecirle',
				name: 'LifeCirle',
				component: () => import('../views/tsx/LifeCircle'),
				visible: true,
				meta: { title: 'LifeCircle', icon: 'lifecirle' },
			},
			{
				path: 'refs',
				name: 'Refs',
				component: () => import('../views/tsx/Refs'),
				visible: true,
				meta: { title: 'Refs', icon: 'refs' },
			},
			{
				path: 'slots',
				name: 'Slots',
				component: () => import('../views/tsx/Slots'),
				visible: true,
				meta: { title: 'Slots', icon: 'slots' },
			},
			{
				path: 'vslots',
				name: 'VSlots',
				component: () => import('../views/tsx/VSlots.vue'),
				visible: true,
				meta: { title: 'VSlots', icon: 'vslots' },
			},
			{
				path: 'attrs',
				name: 'Attrs',
				component: () => import('../views/tsx/Attrs'),
				visible: true,
				meta: { title: 'Attrs', icon: 'attrs' },
			},
			{
				path: 'pi',
				name: 'Provide&Inject',
				component: () => import('../views/tsx/Pi'),
				visible: true,
				meta: { title: 'Provide&Inject', icon: 'pi' },
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
