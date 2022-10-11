import MouseComponent from '@/components/componentMouse';
import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, context) {
		return () => (
			<>
				<MouseComponent></MouseComponent>
			</>
		);
	},
});
