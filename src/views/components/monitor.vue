<!-- @format -->

<template>
	<!-- :style="" -->
	<div class="monitor-root" :style="retieveStyle()">
		<div>{{ calc() }}</div>
		<div>{{ color }}</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
	width: {
		type: Number,
		reqired: true,
		default: 0,
	},
	height: {
		type: Number,
		reqired: true,
		default: 0,
	},
	color: {
		type: String,
		required: true,
		default: '#ffffff',
	},
});
onMounted(() => {
	console.log('onMounted');
	calc();
});
const calc = () => {
	// const width = 61.27,
	// 	height = 31.92;
	const inch = Math.sqrt(Math.pow(props.width, 2) + Math.pow(props.height, 2)) / 25.4;
	return inch;
};
const retieveStyle = () => {
	return `width:${props.width}px;height:${props.height}px;background-color: ${props.color}`;
};
</script>

<style lang="scss" scoped>
.monitor-root {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
}
</style>
