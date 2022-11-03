import { defineComponent, withModifiers } from 'vue';

export default defineComponent({
	setup(props, context) {
		const onDivClick = () => {
			console.log('click div');
		};
		const onBtnClick = () => {
			console.log('click btn');
		};
		return () => (
			<>
				<div>
					{/* withModifiers(onClick, ['self']) */}
					{/* <button onClickOnce={onClick}>Click Once</button> */}
					{/* <div onclick={withModifiers(onDivClick, ['prevent'])}> */}
					<div onclick={onDivClick}>
						<div>holder</div>
						{/* <button onclick={withModifiers(onBtnClick, ['self', 'stop'])}>Click Once</button> */}
						<button onclick={withModifiers(onBtnClick, ['stop'])}>Click Once</button>
					</div>
				</div>
			</>
		);
	},
});
