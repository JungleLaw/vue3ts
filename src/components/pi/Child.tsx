import { defineComponent } from 'vue';
import SubChild from './SubChild';
export default defineComponent({
	setup(props, context) {
		return () => (
			<>
				<div>Child</div>
				<SubChild></SubChild>
			</>
		);
	},
});
