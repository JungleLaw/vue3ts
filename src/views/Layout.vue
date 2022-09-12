<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-11 06:51:04
 * @ Modified by: Captain
 * @ Modified time: 2022-09-11 08:40:48
 * @ Description:
 -->

<template>
	<div class="layout-root">
		<!-- <Monitor class="m1" :width="612.7" :height="391.2" :color="'#ff0000'"></Monitor> -->
		<Monitor
			:draggable="true"
			ondragstart="dragstart(event)"
			ondrop="ondrop(event)"
			class="m2"
			:width="391.2"
			:height="612.7"
			:color="'#ff0000'"
		></Monitor>
		<Monitor :draggable="true" class="m3" :width="539.1" :height="355.8" :color="'#0000ff'"></Monitor>
		<!-- <Monitor class="m1" :width="816.5" :height="485.6" :color="'#00ff00'"></Monitor> -->
		<Monitor :draggable="true" class="m1" :width="816.5" :height="349" :color="'#00ffff'"></Monitor>
	</div>
</template>

<script lang="ts">
import Monitor from './components/monitor.vue';
export default {
	components: { Monitor },
	methods: {
		dragstart(event) {
			console.log('dragstart', event);
		},
		ondrop(event) {
			console.log('ondrop', event);
			return false;
		},
	},
};
</script>

<style lang="scss" scoped>
.layout-root {
	width: 100%;
	height: 10000px;
	position: relative;
	.m1 {
		position: absolute;
		left: 0;
		top: 0;
	}
	.m2 {
		position: absolute;
		left: 816.5px;
		top: 0;
	}
	.m3 {
		position: absolute;
		left: 277.4px;
		top: 349px;
	}
}
</style>
