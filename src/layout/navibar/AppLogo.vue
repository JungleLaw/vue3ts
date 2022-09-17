<template>
	<div class="app-logo-root">
		<!-- <img v-if="!collapse" class="logo-collapse" :src="Logo" alt="hcttop-logo" /> -->
		<router-link to="/">
			<!-- <div class="app-logo">
				<img :src="require(`@/assets/images/navbar/app-logo-${theme}.png`)" alt="hcttop-logo" />
				<div :class="['app-logo__title', `app-logo__title--${theme}-theme`]">
					<span>{{ getProjectTitle }}</span>
				</div>
			</div> -->
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppLogo',
	data() {
		return {
			settings: this.$settings,
		};
	},
	mounted() {
		console.log(this.$settings);
	},
});
</script>

<style lang="scss" scoped>
.app-logo-root {
}
</style>
