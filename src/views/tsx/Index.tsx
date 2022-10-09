import Logger from '@/global/Logger';
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
	name: 'TsxIndex',
	data() {
		return { a: 1 };
	},
	mounted() {
		Logger.debug('mounted', this.a);
	},
	setup(props, ctx) {
		// props, ctx;
		Logger.debug('props', props);
		Logger.debug('ctx', ctx);
		Logger.debug('setup', '');
		let bool = ref(false);
		const executeClick = () => {
			Logger.debug('click', '');
			bool.value = !bool.value;
		};
		Logger.debug('bool', bool);
		return () => (
			<>
				<div onclick={executeClick}>{bool.value ? 'abc' : 'bbc'}</div>
			</>
		);
	},
	methods: {
		executeClick() {
			Logger.debug('click', '');
		},
	},
});
