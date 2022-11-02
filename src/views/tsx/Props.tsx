import { defineComponent, h } from 'vue';
import PropsComponent from '@/components/propsComponent';
export default defineComponent({
	setup(props, context) {
		const obj = { a: 1, b: 2 };
		return () => (
			<>
				<div>
					<PropsComponent p1={'a'} p2={obj}></PropsComponent>
				</div>
			</>
		);
	},
});
