import { defineComponent } from 'vue';
import SlotComponent from '@/components/slotComponent';

export default defineComponent({
	setup(props, context) {
		return () => (
			<>
				<div>
					<div>slots</div>
					<SlotComponent>
						{{
							default: () => <div>body</div>,
							header: () => <div name="header">header</div>,
							footer: () => <div name="footer">footer</div>,
						}}
					</SlotComponent>
				</div>
			</>
		);
	},
});
