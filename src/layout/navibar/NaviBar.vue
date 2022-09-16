<template>
	<div class="navi-bar-root">
		<div class="app-logo-wrapper">
			<img v-if="!collapse" class="logo-collapse" :src="logo" alt="hcttop-logo" />
		</div>
	</div>
</template>

<script lang="ts">
import logo from '@/assets/global/app-logo-classic.png';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NaviBar',
	props: {
		collapse: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return { logo };
	},
});
</script>

<style lang="scss" scoped>
.navi-bar-root {
	width: 100%;
	height: 50px;
	line-height: 50px;

	.app-logo-wrapper {
		width: 332px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 12px 0;

		.logo-collapse {
			//margin-left: -41px;
			width: 332px;
			height: 34px;
		}
	}
}
</style>
