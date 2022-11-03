import { defineComponent } from 'vue';
import style from './style.module.scss';

export default defineComponent({
	name: 'ComponentEmits',
	emits: {
		update: val => {
			return true;
		},
		change: val => {
			return true;
		},
	},
	setup(props, context) {
		const emitUpdate = () => {
			context.emit('update', '123');
		};
		const emitChange = () => {
			context.emit('change', 'abc');
		};
		return () => (
			<>
				<div class={`${style['emits-root']}`}>
					<span class={`${style['emits-txt']}`}>update_txt:</span>
					<button class={`${style['emits-btn']}`} onclick={emitUpdate}>
						update
					</button>
					<span class={`${style['emits-txt']}`}>change_txt:</span>
					<button class={`${style['emits-btn']}`} onclick={emitChange}>
						change
					</button>
				</div>
			</>
		);
	},
});
