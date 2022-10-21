import Logger from '@/global/Logger';
import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, context) {
		const out = () => {
			Logger.debug('RefComponent', 'out');
		};
		context.expose({ out });
		return () => (
			<>
				<div>Ref</div>
			</>
		);
	},
});
