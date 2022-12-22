import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'Index',
	data() {
		return { a: 1 };
	},
	setup(props, ctx) {
		const bool = ref<boolean>(false);
		const executeClick: VoidFunction = () => {
			console.debug('click');
			bool.value = !bool.value;
		};
		return () => (
			<>
				<div onclick={executeClick}>{bool.value ? 'abc' : 'bbc'}</div>
			</>
		);
	},
});
