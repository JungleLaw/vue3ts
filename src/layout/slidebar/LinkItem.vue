<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-25 15:35:20
 * @ Modified by: Captain
 * @ Modified time: 2022-11-04 16:40:56
 * @ Description:
 -->

<template>
	<component :is="type" v-bind="linkProps(to)">
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isUrl } from '@/commons/validator';

export default defineComponent({
	name: 'LinkItem',
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	computed: {
		isExternal() {
			return isUrl(this.to);
		},
		type() {
			if (this.isExternal) {
				return 'a';
			}
			return 'router-link';
		},
	},
	methods: {
		linkProps(to: string) {
			if (this.isExternal) {
				return {
					href: to,
					target: '_blank',
					rel: 'noopener',
				};
			}
			return {
				to,
			};
		},
	},
});
</script>

<style lang="scss" scoped></style>
