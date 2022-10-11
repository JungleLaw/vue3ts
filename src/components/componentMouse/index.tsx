import Logger from '@/global/Logger';
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
	setup(props, context) {
		const x = ref(0);
		const y = ref(0);

		const update = e => {
			x.value = e.offsetX;
			y.value = e.offsetY;
		};

		onMounted(() => {
			Logger.debug('onMounted');
			window.addEventListener('mousemove', update);
		});
		onUnmounted(() => {
			Logger.debug('onUnmounted');
			window.removeEventListener('mousemove', update);
		});
		return () => (
			<>
				<div>
					Mouse position is at: {x.value}, {y.value}
				</div>
			</>
		);
	},
});
