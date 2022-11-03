import {
	defineComponent,
	onActivated,
	onBeforeMount,
	onBeforeUnmount,
	onMounted,
	onRenderTracked,
	onUnmounted,
} from 'vue';

export default defineComponent({
	mounted() {
		console.log('onMounted');
	},
	created() {
		console.log('created');
	},
	setup(props, context) {
		onBeforeUnmount(() => {
			console.log('setup onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('setup onUnmounted');
		});
		onActivated(() => {
			console.log('setup onActivated');
		});
		onBeforeMount(() => {
			console.log('setup onBeforeMount');
		});
		onMounted(() => {
			console.log('setup onMounted');
		});
		onRenderTracked(() => {
			console.log('setup onRenderTracked');
		});
		return () => (
			<>
				<div></div>
			</>
		);
	},
});
