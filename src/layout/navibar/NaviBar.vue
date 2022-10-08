<template>
	<div class="navi-bar-root flex">
		<div class="app-logo-wrapper">
			<app-logo></app-logo>
		</div>
	</div>
</template>

<script lang="ts">
import Logo from '@/assets/global/app-logo-classic.png';
import AppLogo from './AppLogo.vue';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NaviBar',
	components: {
		AppLogo,
	},
	props: {
		collapse: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return { Logo };
	},
	mounted() {
		// Logger.log('abc', 'bbc', 'ddc');
		// console.log('a');
		// console.warn('b');
		// console.error('c');
		// console.info('d');
		// console.debug('e');
		// console.trace();
	},
});
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navi-bar-root {
	height: $navbarHeight;
	overflow: hidden;
	position: relative;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
	&.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.app-logo-wrapper {
		width: 332px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		padding: 0 12px;

		.logo-collapse {
			//margin-left: -41px;
			width: 332px;
			height: 34px;
		}
	}
}
</style>
