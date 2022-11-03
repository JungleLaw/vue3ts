import { defineComponent, reactive, ref } from 'vue';
import Setup from '@/components/setupComponent';

export default defineComponent({
	setup(props, context) {
		const index = ref(0);
		const change = () => {
			index.value++;
		};
		let element: Function = (): JSX.Element => {
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
			console.debug('echo', msg);
		};
		const counter = ref(0);
		let counterTask;
		const startCounter: VoidFunction = () => {
			counterTask = setInterval(() => {
				counter.value++;
			}, 1000);
		};
		const stopCounter: VoidFunction = () => {
			clearInterval(counterTask);
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
				<div>{counter.value}</div>
				<button onclick={startCounter}>start</button>
				<button onclick={stopCounter}>stop</button>
			</>
		);
	},
});
