import Logger from '@/global/Logger';
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
	name: 'TsxIndex',
	data() {
		return { a: 1 };
	},
	setup(props, ctx) {
		const bool: Ref<boolean> = ref(false);
		const executeClick: VoidFunction = () => {
			Logger.debug('click');
			bool.value = !bool.value;
		};
		return () => (
			<>
				<div onclick={executeClick}>{bool.value ? 'abc' : 'bbc'}</div>
			</>
		);
	},
});
