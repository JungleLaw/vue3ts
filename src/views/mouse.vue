<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 04:16:26
 * @ Modified by: Captain
 * @ Modified time: 2022-09-12 20:58:54
 * @ Description:
 -->

<template>
	<!-- <div>The mouse position is ({{ x.value }},{{ y.value }})</div> -->
	<div>The mouse position is ({{ x }},{{ y }})</div>
	<!-- <div>The mouse obj is ({{ values }})</div> -->
</template>

<script lang="ts">
import { ref, toRefs, defineComponent } from 'vue';
import Mouse from './fn/mouse';
// const { x, y } = Mouse.useMouse();
// console.log(x, y);
export default defineComponent({
	name: 'mouse',
	setup(props) {
		const { x, y } = Mouse.useMouse();
		return { x, y };
	},
});
</script>

<style lang="scss" scoped></style>
