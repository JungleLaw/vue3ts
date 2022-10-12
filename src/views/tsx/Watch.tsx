/**
 * @ Author: Captain
 * @ Create Time: 2022-10-13 01:07:09
 * @ Modified by: Captain
 * @ Modified time: 2022-10-13 01:36:58
 * @ Description:
 */

import Logger from '@/global/Logger';
import { defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
	setup(props, context) {
		const test = ref('abc');
		const counter = reactive({ num: 1 });
		const click = () => {
			test.value = 'bbc';
		};
		const count = () => {
			counter.num++;
		};
		// ref
		watch(test, (nv, ov) => {
			Logger.debug('handler test', nv, ov);
		});
		// reactive
		watch(
			() => counter.num,
			(nv, ov) => {
				Logger.debug('handler counter', nv, ov);
			},
			{ deep: true, immediate: true },
		);
		return () => (
			<>
				<div>
					<div>{test.value}</div>
					<button onclick={click}>btn</button>
					<div>{counter.num}</div>
					<button onclick={count}>count</button>
				</div>
			</>
		);
	},
});
