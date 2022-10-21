import { defineComponent, getCurrentInstance } from 'vue';
import RefComponent from '@/components/refComponent';
import Logger from '@/global/Logger';

export default defineComponent({
	setup(props, context) {
		Logger.debug('props', props);
		Logger.debug('props', props['Proxy']);
		Logger.debug('context', context);
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
