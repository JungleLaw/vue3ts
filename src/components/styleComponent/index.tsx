import { defineComponent } from 'vue';
import StyleList from './stylelList';
import style from './style.module.scss';
interface Item {
	label: String;
	date: String;
	status: String;
}
export default defineComponent({
	setup(props, context) {
		const array: Array<Item> = [
			{ label: '1', date: '2022-10-17', status: 'normal' },
			{ label: 'A', date: '2022-10-18', status: 'error' },
			{ label: '2', date: '2022-10-19', status: 'offline' },
			{ label: 'B', date: '2022-10-20', status: 'normal' },
		];
		return () => (
			<>
				<div className={style.style_root}>
					<div className={style.left_root}>
						<StyleList list={array}></StyleList>
					</div>
					<div className={style.right_root}>2</div>
				</div>
			</>
		);
	},
});
