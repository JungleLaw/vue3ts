import { defineComponent, ref } from 'vue';
import AttrComponent from '@/components/AttrComponent';

export default defineComponent({
	setup(props, context) {
		const a = ref<number>(2);
		const b = ref<string>('b');
		const click = () => {
			a.value++;
		};
		return () => (
			<>
				<div>
					<AttrComponent a={a.value} b={b.value}></AttrComponent>
					<button onclick={click}>plus</button>
				</div>
			</>
		);
	},
});
