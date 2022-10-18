import Logger from '@/global/Logger';
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
		Logger.log('onMounted');
	},
	created() {
		Logger.log('created');
	},
	setup(props, context) {
		onBeforeUnmount(() => {
			Logger.log('setup onBeforeUnmount');
		});
		onUnmounted(() => {
			Logger.log('setup onUnmounted');
		});
		onActivated(() => {
			Logger.log('setup onActivated');
		});
		onBeforeMount(() => {
			Logger.log('setup onBeforeMount');
		});
		onMounted(() => {
			Logger.log('setup onMounted');
		});
		onRenderTracked(() => {
			Logger.log('setup onRenderTracked');
		});
		return () => (
			<>
				<div></div>
			</>
		);
	},
});
