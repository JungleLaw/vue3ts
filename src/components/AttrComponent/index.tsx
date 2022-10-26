import Logger from '@/global/Logger';
import { defineComponent } from 'vue';

export default defineComponent({
	inheritAttrs: false,
	setup(props, context) {
		Logger.debug('props', props);
		Logger.debug('context', context);
		const { attrs } = context;
		return () => (
			<>
				<div>{attrs.a}</div>
				<div>{attrs.b}</div>
			</>
		);
	},
});
