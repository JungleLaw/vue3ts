<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-25 04:43:21
 * @ Description:
 -->

<template>
	<div class="home-root">
		<div class="parent">
			<div class="header">1</div>
			<div class="body">2</div>
			<div class="footer">3</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TypeScript',
	data() {
		return {
			count: 0,
		};
	},
});
</script>

<style lang="scss" scoped>
.home-root {
	height: 100%;
	overflow-y: auto;
	.parent {
		// height: calc(100vh - 50px);
		height: 200vh;
		display: flex;
		flex-flow: column nowrap;
		.header {
			height: 10%;
			background-color: #42b983;
		}

		.body {
			flex: 1;
		}

		.footer {
			height: 10%;
			background-color: #2c3e50;
		}
	}
}
</style>
