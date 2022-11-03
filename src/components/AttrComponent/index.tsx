import { defineComponent } from 'vue';

export default defineComponent({
	inheritAttrs: false,
	setup(props, context) {
		const { attrs } = context;
		return () => (
			<>
				<div>{attrs.a}</div>
				<div>{attrs.b}</div>
			</>
		);
	},
});
