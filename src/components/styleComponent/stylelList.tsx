import { defineComponent } from 'vue';
import StyleItem from './styleItem';
interface Item {
	label: String;
	date: String;
	status: String;
}
export default defineComponent({
	props: {
		list: {
			type: Array,
			require: true,
			default: (): Array<Item> => [],
		},
	},
	setup(props, context) {
		return () => (
			<>
				<div>
					{props.list.map(element => (
						<StyleItem item={element as object}></StyleItem>
					))}
				</div>
			</>
		);
	},
});
