import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, context) {
		const { slots } = context;
		return () => (
			<>
				<div>
					<div>{slots.header!()}</div>
					<div>{slots.default!()}</div>
					<div>{slots.footer!()}</div>
				</div>
			</>
		);
	},
});
