<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:23:08
 * @ Modified by: Captain
 * @ Modified time: 2022-11-03 17:02:44
 * @ Description:
 -->

<template>
	<div class="slidebar-root flex">
		<el-scrollbar class="scrollbar-wrapper">
			<el-menu
				:default-active="`/home`"
				:collapse="isCollapse"
				:unique-opened="true"
				:collapse-transition="true"
				:menu-trigger="'click'"
				:router="true"
				mode="vertical"
			>
				<!-- @open="handleOpen"
				@close="handleClose"
				@select="handleSelect" -->
				<slide-item
					v-for="(route, index) in routes"
					:index="index"
					:key="route.path"
					:item="route"
					:base-path="route.path"
				></slide-item>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SlideItem from './SlideItem.vue';

export default defineComponent({
	name: 'SlideBar',
	data() {
		return {
			isCollapse: ref(false),
		};
	},
	computed: {
		routes() {
			return this.$router.options.routes;
		},
	},
	components: { SlideItem },
	methods: {
		handleOpen(key: string, keyPath: string[]) {
			console.debug('handleOpen', key, keyPath);
		},
		handleClose(key: string, keyPath: string[]) {
			console.debug('handleClose', key, keyPath);
		},
		handleSelect(key: string, keyPath: string[]) {
			console.debug('handleSelect', key, keyPath);
		},
	},
});
</script>

<style lang="scss" scoped>
.slidebar-root {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.scrollbar-wrapper {
		width: 100%;
		height: 100%;
		overflow-x: hidden !important;
	}
}
</style>
