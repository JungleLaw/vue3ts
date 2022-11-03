/**
 * @ Author: Captain
 * @ Create Time: 2022-10-12 14:00:33
 * @ Modified by: Captain
 * @ Modified time: 2022-11-03 17:04:48
 * @ Description:
 */

import { defineComponent } from 'vue';
import ComponentEmits from '@/components/componentEmits/index';
export default defineComponent({
	setup(props, context) {
		const change = params => {
			console.debug('dest change', params);
		};
		const update = params => {
			console.debug('dest update', params);
		};
		return () => (
			<>
				<ComponentEmits onChange={change} onUpdate={update}></ComponentEmits>
			</>
		);
	},
});
