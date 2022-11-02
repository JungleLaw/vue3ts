<template>
	<div class="ba-root">
		<div class="ba-parent">
			<div class="scroll wrapper">
				<p class="content">scroll</p>
			</div>
			<div class="fixed wrapper">
				<p class="content">fixed</p>
			</div>
			<div class="local wrapper">
				<p class="content">local</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Background from '@/assets/background/hk1.jpg';

export default defineComponent({
	name: '',
	data() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.ba-root {
	width: 100%;
	height: 100vh;
	overflow: auto;
	.ba-parent {
		display: flex;
		flex-flow: row nowrap;
		height: 10000px;

		.wrapper {
			flex: 1;
			height: 400px;
			overflow: auto;
			background-color: rgba(0, 0, 0, 0.5);
			background-size: 400px 400px;
			background-repeat: no-repeat;
			background-position: top center;
			padding: 1%;
		}
		.scroll {
			background-attachment: scroll;
			background-image: url('@/assets/background/hk1.jpg');
			background-size: contain;
			background-repeat: repeat-y;
		}
		.fixed {
			background-attachment: fixed;
			background-image: url('@/assets/background/hk2.jpg');
			background-size: cover;
		}
		.local {
			background-attachment: local;
			background-image: url('@/assets/background/hk3.jpg');
			background-repeat: repeat-y;
			background-size: contain;
		}
		.content {
			height: 3000px;
		}
	}
}
</style>
