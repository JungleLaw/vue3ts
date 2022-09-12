<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-12 00:53:39
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
		console.log('mounted', this.pa);
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
		console.log('setup props', props);
		console.log('setup context', context);
		console.log('setup this', this);
		onMounted(() => {
			console.log('Component is mounted!', this);
		});
		onBeforeUpdate(() => {
			console.log('setup onBeforeUpdate');
		});
		onUpdated(() => {
			console.log('setup onUpdated');
		});
		onBeforeUnmount(() => {
			console.log('setup onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('setup onUnmounted');
		});
		onErrorCaptured(() => {
			console.log('setup onErrorCaptured');
		});
		onRenderTracked(() => {
			console.log('setup onRenderTracked');
		});
		onRenderTriggered(() => {
			console.log('setup onRenderTriggered');
		});
		onActivated(() => {
			console.log('setup onActivated');
		});
		onDeactivated(() => {
			console.log('setup onDeactivated');
		});
		let repositories = [];
		const getUserRepositories = async () => {
			console.log('setup getUserRepositories');
		};
		return {
			repositories,
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
			getUserRepositories,
		};
	},
});
</script>

<style lang="scss" scoped></style>
