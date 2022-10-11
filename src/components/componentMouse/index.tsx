import Logger from '@/global/Logger';
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import style from './style.scss';

export default defineComponent({
	setup(props, context) {
		const x = ref(0);
		const y = ref(0);

		const update = e => {
			x.value = e.offsetX;
			y.value = e.offsetY;
		};
		let root;
		onMounted(() => {
			Logger.debug('onMounted');
			root = document.getElementsByClassName('mouse-root');
			Logger.debug('target', root[0]);
			root[0].addEventListener('mousemove', update);
		});
		onUnmounted(() => {
			Logger.debug('onUnmounted');
			root[0].removeEventListener('mousemove', update);
		});
		return () => (
			<div className="mouse-root">
				<span>
					Mouse position is at: {x.value}, {y.value}
				</span>
			</div>
		);
	},
});
