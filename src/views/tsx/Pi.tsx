/**
 * @ Author: Captain
 * @ Create Time: 2022-10-25 14:46:15
 * @ Modified by: Captain
 * @ Modified time: 2022-10-26 14:21:47
 * @ Description:
 */

import Child from '@/components/pi/Child';
import Message from '@/components/pi/msg';
import { defineComponent, provide } from 'vue';

export default defineComponent({
	setup(props, context) {
		const msg: Message = { a: 'a', b: 2, c: 'c' };
		provide('msg', msg);
		return () => (
			<>
				<div>
					<Child></Child>
					<input type="text" v-focus />
				</div>
			</>
		);
	},
});
