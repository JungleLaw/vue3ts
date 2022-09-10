<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 15:44:00
 * @ Description:
 -->

<template>
	<div class="parent">
		<div>
			<div>{{ mydata }}</div>
			<input type="text" v-model="mydata" />
		</div>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
	onErrorCaptured,
	onRenderTracked,
	onRenderTriggered,
	onActivated,
	onDeactivated,
} from 'vue';

export default defineComponent({
	// 已启用类型推断
	props: {
		pa: {
			type: String,
			default: 'a',
		},
	},
	data() {
		return {
			mydata: 11,
		};
	},
	created() {
		console.log('created', this.mydata);
	},
	mounted() {
		console.log('mounted');
	},
	onBeforeMount() {
		console.log('onBeforeMount');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	},
	beforeUnmount() {
		console.log('beforeUnmount');
	},
	unmounted() {
		console.log('unmounted');
	},
	errorCaptured() {
		console.log('errorCaptured');
	},
	renderTracked() {
		console.log('renderTracked');
	},
	renderTriggered() {
		console.log('renderTriggered');
	},
	activated() {
		console.log('activated');
	},
	deactivated() {
		console.log('deactivated');
	},
	setup(props, context) {
		console.log('setup', props, context);
		onMounted(() => {
			console.log('Component is mounted!');
		});
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate');
		});
		onUpdated(() => {
			console.log('onUpdated');
		});
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('onUnmounted');
		});
		onErrorCaptured(() => {
			console.log('onErrorCaptured');
		});
		onRenderTracked(() => {
			console.log('onRenderTracked');
		});
		onRenderTriggered(() => {
			console.log('onRenderTriggered');
		});
		onActivated(() => {
			console.log('onActivated');
		});
		onDeactivated(() => {
			console.log('onDeactivated');
		});
		let repositories = [];
		const getUserRepositories = async () => {
			console.log('getUserRepositories');
		};
		return {
			repositories,
			getUserRepositories,
		};
	},
});
</script>

<style lang="scss" scoped></style>
