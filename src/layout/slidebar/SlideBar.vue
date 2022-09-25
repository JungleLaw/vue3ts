<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-16 10:23:08
 * @ Modified by: Captain
 * @ Modified time: 2022-09-25 23:56:15
 * @ Description:
 -->

<template>
	<div class="slidebar-root flex">
		<el-scrollbar class="scrollbar-wrapper">
			<el-menu
				:default-active="2"
				:collapse="isCollapse"
				:unique-opened="true"
				:collapse-transition="false"
				mode="vertical"
			>
				<div v-for="route in routes" :key="route.path" :item="route" :base-path="route.path">
					<div>{{ route.name }}</div>
				</div>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SlideBar',
	data() {
		return {
			isCollapse: false,
		};
	},
	computed: {
		routes() {
			return this.$router.options.routes;
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
