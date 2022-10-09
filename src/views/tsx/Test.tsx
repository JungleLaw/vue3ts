import Logger from '@/global/Logger';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	setup(props, context) {
		const visible = ref<boolean>(true);
		const num = ref<number>(1);
		const toggle = () => {
			visible.value = !visible.value;
			num.value++;
			Logger.debug('visible', visible);
		};
		Logger.debug('visible', visible);
		const echo = (event, msg) => {
			// Logger.debug('event', event);
			Logger.debug('echo', msg);
		};
		return () => (
			<>
				<button onclick={toggle}>toggle</button>
				<div v-show={visible.value}>bbc</div>
				<div>num:{num.value}</div>
				{[1, 2, 3].map(item => {
					return (
						<div
							onclick={e => {
								echo(e, item);
							}}>
							<li key={item}>{item}</li>
						</div>
					);
				})}
			</>
		);
	},
});
