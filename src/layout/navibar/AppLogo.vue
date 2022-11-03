<template>
	<div class="app-logo-root">
		<!-- <img v-if="!collapse" class="logo-collapse" :src="Logo" alt="hcttop-logo" /> -->
		<router-link to="/">
			<div class="app-logo">
				<!-- <img :src="require(`@/assets/images/navbar/app-logo-${theme}.png`)" alt="hcttop-logo" /> -->
				<img :src="getCurrentThemeLogo" alt="hcttop-logo" />
				<div :class="['app-logo__title', `app-logo__title--${settings.theme}-theme`]">
					<span>{{ getAppTitle }}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import ClassicLogo from '@/assets/layout/navibar/app-logo-classic.png';
import DarkLogo from '@/assets/layout/navibar/app-logo-dark.png';
import LightLogo from '@/assets/layout/navibar/app-logo-light.png';
import { ThemeEnum } from '@/global/Enum';

import { defineComponent, reactive } from 'vue';

export default defineComponent({
	name: 'AppLogo',
	data() {
		return {
			ClassicLogo,
			DarkLogo,
			LightLogo,
			settings: reactive(this.$settings),
		};
	},
	mounted() {},
	methods: {
		AppLogo() {
			return this.ClassicLogo;
		},
	},
	watch: {
		settings: {
			handler(newName, oldName) {
				// Logger.info('newName', newName);
				// Logger.info('oldName', oldName);
			},
			immediate: true,
			deep: true,
		},
	},
	computed: {
		getCurrentThemeLogo(): string {
			switch (this.settings.theme) {
				case ThemeEnum.Dark:
					return DarkLogo;
				case ThemeEnum.Light:
					return LightLogo;
				default:
					return ClassicLogo;
			}
		},
		getAppTitle() {
			return this.settings.projectName;
		},
	},
});
</script>

<style lang="scss" scoped>
.app-logo-root {
	.app-logo {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;

		&__title {
			width: auto;
			height: 26px;
			line-height: 24px;
			font-size: 16px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			border-radius: 4px;
			padding: 0 10px;

			&--dark-theme {
				background: linear-gradient(
					270deg,
					rgba(98, 70, 223, 0.8) 0%,
					rgba(27, 32, 41, 0.8) 49%,
					rgba(47, 139, 191, 1) 100%
				);
				color: #fff;
				border: 1px solid rgba(57, 135, 255, 1);
				transform: skewX(-10deg);
				& > span {
					display: block;
					transform: skewX(10deg);
				}
			}
			&--classic-theme {
				color: #fff;
				border: 1px solid #f3f5f7;
				font-weight: 400;
			}

			&--light-theme {
				color: #fff;
				background: #3987ff;
				border: 1px solid #fff;
				border-radius: 4px;
			}
		}
	}
}
</style>
