<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:06:39
 * @ Modified by: Captain
 * @ Modified time: 2022-09-25 04:40:52
 * @ Description:
 -->

<template>
	<div class="layout-root">
		<div class="fixed-header">
			<navi-bar></navi-bar>
		</div>
		<div class="fix-menu">
			<slide-bar class="slide-bar"></slide-bar>
		</div>
		<div class="main-content-wrapper">
			<main-content></main-content>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent from './contentview/MainContent.vue';
import NaviBar from './navibar/NaviBar.vue';
import SlideBar from './slidebar/SlideBar.vue';

export default defineComponent({
	name: 'Layout',
	components: {
		NaviBar,
		SlideBar,
		MainContent,
	},
});
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.layout-root {
	width: 100%;
	height: 100%;
	position: relative;
	.fixed-header {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9;
		// width: calc(100% - #{$sidebarWidth});
		width: 100%;
		transition: width 0.28s;
	}
	.fix-menu {
		position: fixed;
		top: $navbarHeight;
		left: 0;
		z-index: 19;
		width: $sidebarWidth;
		height: calc(100% - #{$navbarHeight});
		transition: width 0.28s;
	}
	.main-content-wrapper {
		height: 100%;
		transition: margin-left 0.28s;
		margin-left: $sidebarWidth;
		position: relative;
		padding-top: $navbarHeight;
	}
}
</style>
