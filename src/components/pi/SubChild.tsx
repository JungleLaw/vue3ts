import { defineComponent, inject } from 'vue';
import Message from './msg';
export default defineComponent({
	setup(props, context) {
		const msg: Message = inject('msg') as Message;
		return () => (
			<>
				<div>subchild</div>
				<div>{msg.a}</div>
				<div>{msg.b}</div>
				<div>{msg.c}</div>
			</>
		);
	},
});
