<template>
	<div class="ba-root">
		<div class="ba-parent grid">
			<template v-for="(item, index) in array" :key="index">
				<div :class="`grid-item item-${index}`">{{ index }}</div>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Background from '@/assets/background/hk1.jpg';

export default defineComponent({
	name: '',
	data() {
		return {
			array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		};
	},
});
</script>

<style lang="scss" scoped>
.ba-root {
	width: 100%;
	.ba-parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		// grid-template-rows: 100px 100px 100px;
		grid-gap: 20px;
		.grid-item {
			width: 100%;
			height: 100px;
		}
		.item-2 {
			background-color: yellow;
			// grid-column: 2 / 4;
			grid-row: 2 / 4;
		}
		// .item-3 {
		// background-color: yellow;
		// grid-column: 1 / 3;
		// }
	}
}
</style>
