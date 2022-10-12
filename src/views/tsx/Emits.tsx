/**
 * @ Author: Captain
 * @ Create Time: 2022-10-12 14:00:33
 * @ Modified by: Captain
 * @ Modified time: 2022-10-12 18:17:25
 * @ Description:
 */

import { defineComponent } from 'vue';
import ComponentEmits from '@/components/componentEmits/index';
import Logger from '@/global/Logger';
export default defineComponent({
	setup(props, context) {
		const change = () => {
			Logger.debug('dest change');
		};
		const update = () => {
			Logger.debug('dest update');
		};
		return () => (
			<>
				<ComponentEmits onChange={change} onUpdate={update}></ComponentEmits>
			</>
		);
	},
});
