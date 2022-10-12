/**
 * @ Author: Captain
 * @ Create Time: 2022-10-12 14:00:33
 * @ Modified by: Captain
 * @ Modified time: 2022-10-12 18:35:44
 * @ Description:
 */

import { defineComponent } from 'vue';
import ComponentEmits from '@/components/componentEmits/index';
import Logger from '@/global/Logger';
export default defineComponent({
	setup(props, context) {
		const change = params => {
			Logger.debug('dest change', params);
		};
		const update = params => {
			Logger.debug('dest update', params);
		};
		return () => (
			<>
				<ComponentEmits onChange={change} onUpdate={update}></ComponentEmits>
			</>
		);
	},
});
