import Logger from '@/global/Logger';
import { defineComponent, ref, reactive, onUnmounted, onMounted } from 'vue';
import ComponentA from '@/components/componentA/index.vue';
import ComponentB from '@/components/componentB/index.vue';

export default defineComponent({
	props: {
		pp: {
			type: String,
			default: 'ccc',
		},
	},
	setup(props, context) {
		Logger.debug('context', context);
		Logger.debug('props', props);
		const text = ref<string>(props.pp);
		const visible = ref<boolean>(true);
		const num = ref<number>(1);
		const list = reactive([1, 2, 3]);
		const toggle = () => {
			visible.value = !visible.value;
			num.value++;
		};
		const echo = (event, msg) => {
			// Logger.debug('event', event);
			Logger.debug('echo', msg);
		};
		onMounted(() => {
			Logger.debug('onMounted', num.value);
		});
		return () => (
			<>
				<ComponentA></ComponentA>
				<ComponentB></ComponentB>
				<button onclick={toggle}>toggle</button>
				<div v-show={visible.value}>{text.value}</div>
				<div>num:{num.value}</div>
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
			</>
		);
	},
});
