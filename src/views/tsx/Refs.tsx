import { defineComponent, getCurrentInstance } from 'vue';
import RefComponent from '@/components/refComponent';

export default defineComponent({
	setup(props, context) {
		console.debug('props', props);
		console.debug('props', props['Proxy']);
		console.debug('context', context);
		const { proxy } = getCurrentInstance();
		const click = () => {
			proxy.$refs.rc.out();
		};
		return () => (
			<>
				<div>
					<div>Refs</div>
					<RefComponent ref="rc"></RefComponent>
					<button onclick={click}>RC Out</button>
				</div>
			</>
		);
	},
});
