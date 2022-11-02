<template>
	<div class="media-root"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: '',
	data() {
		return {};
	},
	mounted() {},
});
</script>

<style lang="scss" scoped>
.media-root {
	width: 100%;
	height: 100%;
	background-color: red;
}
@media screen and (orientation: landscape) {
	.media-root {
		width: 100%;
		height: 100%;
		background-color: blue;
	}
}
</style>
