import { defineComponent, reactive, ref } from 'vue';
import Setup from '@/components/setupComponent';
import Logger from '@/global/Logger';
export default defineComponent({
	setup(props, context) {
		const index = ref(0);
		const change = () => {
			index.value++;
		};
		let element = () => {
			switch (index.value % 5) {
				case 0:
					return <div>aaa</div>;
				case 1:
					return <div>bbb</div>;
				case 2:
					return <div>ccc</div>;
				case 3:
					return <div>ddd</div>;
				default:
					return <div>ELSE</div>;
			}
		};
		const list = reactive([1, 2, 3]);
		const echo = (event, msg) => {
			// Logger.debug('event', event);
			Logger.debug('echo', msg);
		};
		return () => (
			<>
				<Setup></Setup>
				<button onclick={change}>change</button>
				{list.map(item => {
					return (
						<div
							onclick={e => {
								echo(e, item);
							}}>
							<li key={item}>{item}</li>
						</div>
					);
				})}
				{element()}
			</>
		);
	},
});
