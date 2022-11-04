/**
 * @ Author: Captain
 * @ Create Time: 2022-10-12 14:00:33
 * @ Modified by: Captain
 * @ Modified time: 2022-11-04 15:40:20
 * @ Description:
 */

import { defineComponent } from 'vue';
import ComponentEmits from '@/components/componentEmits/index';
export default defineComponent({
	setup(props, context) {
		const change = (params: any) => {
			console.debug('dest change', params);
		};
		const update = (params: any) => {
			console.debug('dest update', params);
		};
		return () => (
			<>
				<ComponentEmits onChange={change} onUpdate={update}></ComponentEmits>
			</>
		);
	},
});
