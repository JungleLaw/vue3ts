<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:47:29
 * @ Modified by: Captain
 * @ Modified time: 2022-09-11 06:39:55
 * @ Description:
 -->

<template>
	<div class="d1-root">
		<div>D1</div>
		<button @click="emit">log</button>
	</div>
</template>

<script lang="ts">
export default {
	name: 'D1D',
	emits: ['log'],
	methods: {
		emit() {
			this.$emit('log', {
				a: 1,
				b: 2,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.d1-root {
	width: 100px;
	height: 100px;
	background-color: aquamarine;
}
</style>
