import { defineComponent, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import style from './style.module.scss';

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
			root = document.getElementsByClassName(style['mouse-root']);
			root[0].addEventListener('mousemove', update);
		});
		onBeforeUnmount(() => {
			root[0].removeEventListener('mousemove', update);
		});
		return () => (
			// <div className="mouse-root">
			<div class={`${style['mouse-root']}`}>
				<span>
					Mouse position is at: {x.value}, {y.value}
				</span>
			</div>
		);
	},
});
