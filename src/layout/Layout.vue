<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:06:39
 * @ Modified by: Captain
 * @ Modified time: 2022-09-18 22:48:47
 * @ Description:
 -->

<template>
	<div class="layout-root">
		<navi-bar></navi-bar>
		<div class="main-content-container">
			<div>slide</div>
			<main-content></main-content>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent from './contentview/MainContent.vue';
import NaviBar from './navibar/NaviBar.vue';

export default defineComponent({
	name: 'Layout',
	components: {
		NaviBar,
		MainContent,
	},
});
</script>

<style lang="scss" scoped>
.layout-root {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	.main-content-container {
		width: 100%;
		min-height: calc(100vh - 50px);
		display: flex;
		flex-flow: row nowrap;
		background-color: aqua;
	}
}
</style>
