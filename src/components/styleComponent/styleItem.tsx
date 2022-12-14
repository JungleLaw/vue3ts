import { defineComponent } from 'vue';

interface Item {
	label: String;
	date: String;
	status: String;
}
export default defineComponent({
	props: {
		item: { type: Object, require: true, default: (): Item | null => null },
	},
	setup(props, context) {
		return () => (
			<>
				<div>
					<div>{props.item?.label}</div>
					<div>{props.item?.date}</div>
					<div>{props.item?.status}</div>
				</div>
			</>
		);
	},
});
