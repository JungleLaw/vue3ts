import { defineComponent } from 'vue';
import StyleComponent from '@/components/styleComponent';
export default defineComponent({
	setup(props, context) {
		return () => (
			<>
				<div>
					<StyleComponent></StyleComponent>
				</div>
			</>
		);
	},
});
