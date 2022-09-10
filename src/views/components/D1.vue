<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:47:29
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 15:50:38
 * @ Description:
 -->

<template>
	<div>D1</div>
	<button @click="emit">log</button>
</template>

<script>
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

<style scoped></style>
