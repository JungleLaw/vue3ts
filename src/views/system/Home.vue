<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-15 01:13:33
 * @ Description:
 -->

<template>
	<div class="parent">
		<div class="header">1</div>
		<div class="body">2</div>
		<div class="footer">3</div>
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
.parent {
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;

	.header {
		height: 10vh;
		background-color: #42b983;
	}

	.body {
		flex: 1;
	}

	.footer {
		height: 10vh;
		background-color: #2c3e50;
	}
}
</style>
