import { defineComponent, getCurrentInstance } from 'vue';
import RefComponent from '@/components/refComponent';

export default defineComponent({
	setup(props, context) {
		console.debug('props', props);
		console.debug('context', context);
		const click = () => {};
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
