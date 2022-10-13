import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, context) {
		return () => (
			<>
				<div>setup</div>
			</>
		);
	},
});
