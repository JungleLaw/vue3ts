<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-25 15:35:00
 * @ Modified by: Captain
 * @ Modified time: 2022-10-10 18:11:32
 * @ Description:
 -->

<template>
	<div class="slide-item-root" v-if="item.visible">
		<template
			v-if="
				singleVisibleChildRouter(item) &&
				(!visibleRouter.children || visibleRouter.hasVisibleChildren) &&
				!visibleRouter.alwaysShow
			"
		>
			<link-item v-if="visibleRouter.meta" :to="resolvePath(visibleRouter.path)">
				<el-menu-item :index="resolvePath(visibleRouter.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
					<slide-title
						v-if="item.meta"
						:icon="item.meta && item.meta.icon"
						:title="item.meta.title"
					></slide-title>
				</el-menu-item>
			</link-item>
		</template>
		<el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)">
			<template #title>
				<slide-title
					v-if="item.meta"
					:icon="item.meta && item.meta.icon"
					:title="item.meta.title"
				></slide-title>
			</template>
			<slide-item
				class="nest-menu"
				v-for="(child, index) in item.children || []"
				:index="index"
				:key="child.path"
				:item="child"
				:is-nest="true"
				:base-path="resolvePath(child.path)"
			>
			</slide-item>
		</el-sub-menu>
	</div>
</template>

<script lang="ts">
import { isUrl } from '@/commons/validator';
import path from 'path-browserify';
import { defineComponent } from 'vue';
import SlideTitle from './SlideTitle.vue';
import LinkItem from './LinkItem.vue';
import Logger from '@/global/Logger';

export default defineComponent({
	name: 'SlideItem',
	components: { SlideTitle, LinkItem },
	props: {
		index: {
			type: Number,
			required: true,
		},
		item: {
			type: Object,
			required: true,
		},
		isNest: {
			type: Boolean,
			default: false,
		},
		basePath: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			visibleRouter: {
				meta: {
					icon: '',
					title: '',
				},
				children: [],
				hasVisibleChildren: false,
				alwaysShow: false,
				path: '',
			},
		};
	},
	methods: {
		singleVisibleChildRouter(router): Boolean {
			const visibleRouters =
				router.children?.filter(item => {
					if (!item.visible) {
						return false;
					}
					this.visibleRouter = item;
					return true;
				}) || [];
			if (visibleRouters.length === 1) {
				return true;
			}
			if (visibleRouters.length === 0) {
				this.visibleRouter = { ...router, path: '', hasVisibleChildren: true };
				return true;
			}
			return false;
		},
		resolvePath(routePath) {
			if (isUrl(routePath)) {
				return routePath;
			}
			if (isUrl(this.basePath)) {
				return this.basePath;
			}
			return path.resolve(this.basePath, routePath);
		},
	},
});
</script>

<style lang="scss" scoped>
.slide-item-root {
}
</style>
