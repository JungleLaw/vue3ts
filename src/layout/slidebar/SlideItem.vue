<template>
	<div class="slide-item-root" v-if="!item.hidden">
		<template v-if="singleShownChildRouter(item)"> </template>
		<el-sub-menu ref="subMenu" :index="index.toString()">
			<template v-slot:title>
				<slide-title
					v-if="item.meta"
					:icon="item.meta && item.meta.icon"
					:title="item.meta.title"
				></slide-title>
			</template>
		</el-sub-menu>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideTitle from './SlideTitle.vue';

export default defineComponent({
	name: 'SlideItem',
	components: { SlideTitle },
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
			singleRouer: {},
		};
	},
	methods: {
		singleShownChildRouter(router): Boolean {
			const shownRouters =
				router.children?.filter(item => {
					if (!item.visible) {
						return false;
					}
					this.singleRouer = item;
					return true;
				}) || [];
			if (shownRouters.length === 1) {
				return true;
			}
			if (shownRouters.length === 0) {
				this.singleRouer = { ...parent, path: '', noShowingChildren: true };
				return true;
			}
			return false;
		},
	},
});
</script>

<style lang="scss" scoped>
.slide-item-root {
}
</style>
