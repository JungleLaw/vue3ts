import Logger from '@/global/Logger';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
	props: {
		p1: {
			type: String,
			default: 'ppp',
		},
		p2: {
			type: Object,
			default: () => {},
		},
	},
	setup(props, context) {
		Logger.debug('setup', props);
		const p1p = ref(props.p1);
		const p2p = reactive(props.p2);
		return () => (
			<>
				<div>{props.p1}</div>
				<div>{p1p.value}</div>
				<div>{p2p.a}</div>
				<div>{p2p.b}</div>
				<button
					onclick={() => {
						p1p.value = 'b';
					}}>
					btn
				</button>
			</>
		);
	},
});
