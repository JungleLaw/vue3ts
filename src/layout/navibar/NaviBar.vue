<template>
	<div class="navigator-root">Navi</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'navigator',
	data() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.navigator-root {
	width: 100%;
	height: 50px;
	line-height: 50px;
}
</style>
