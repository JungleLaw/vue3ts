import { defineComponent } from 'vue';

export default defineComponent({
 * @ Modified by: Captain
 * @ Modified time: 2022-11-03 17:01:02
			console.debug('RefComponent', 'out');
		};
		context.expose({ out });
		return () => (
			<>
				<div>Ref</div>
			</>
		);
	},
});
