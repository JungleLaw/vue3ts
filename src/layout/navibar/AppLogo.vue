<template>
	<div class="app-logo-root">
		<!-- <img v-if="!collapse" class="logo-collapse" :src="Logo" alt="hcttop-logo" /> -->
		<router-link to="/">
			<div class="app-logo">
				<!-- <img :src="require(`@/assets/images/navbar/app-logo-${theme}.png`)" alt="hcttop-logo" />
				<div :class="['app-logo__title', `app-logo__title--${theme}-theme`]">
				</div> -->
				<img :src="AppLogo()" alt="hcttop-logo" />
				<span>{{ settings.projectName }}</span>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import ClassicLogo from '@/assets/layout/navibar/app-logo-classic.png';

import Logger from '@/global/Logger';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
	name: 'AppLogo',
	data() {
		return {
			ClassicLogo,
			settings: reactive(this.$settings),
		};
	},
	mounted() {
		// console.log(this.$settings);
		Logger.info('this.settings', this.settings);
	},
	watch: {
		settings: {
			handler(newName, oldName) {
				Logger.info('newName', newName);
				Logger.info('oldName', oldName);
			},
			immediate: true,
			deep: true,
		},
	},
	methods: {
		AppLogo() {
			return this.ClassicLogo;
		},
	},
});
</script>

<style lang="scss" scoped>
.app-logo-root {
}
</style>
