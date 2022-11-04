import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, context) {
		const out = () => {
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
