/**
 * @ Author: Captain
 * @ Create Time: 2022-10-13 01:07:09
 * @ Modified by: Captain
 * @ Modified time: 2022-10-26 16:35:45
 * @ Description:
 */

import { defineComponent, reactive, ref, watch, watchEffect } from 'vue';

export default defineComponent({
	setup(props, context) {
		const test = ref('abc');
		const counter = reactive({ num: 1 });
		const click = () => {
			test.value = 'bbc' + counter.num;
		};
		const count = () => {
			counter.num++;
		};
		// ref
		// watch(test, (nv, ov) => {
		// 	Logger.debug('handler test', nv, ov);
		// });
		// reactive
		// watch(
		// 	() => counter.num,
		// 	(nv, ov) => {
		// 		Logger.debug('handler counter', nv, ov);
		// 	},
		// 	{ deep: true, immediate: true },
		// );
		// watchEffect
		watchEffect(() => {
			// Logger.debug('watchEffect');
			console.debug('test', test.value);
			// Logger.debug('count', counter.num);
		});
		watchEffect(() => {
			// Logger.debug('watchEffect');
			// Logger.debug('test', test.value);
			console.debug('count', counter.num);
		});
		return () => (
			<>
				<div>
					<div>ref =&gt; {test.value}</div>
					<button onclick={click}>btn</button>
					<div>reactive =&gt; {counter.num}</div>
					<button onclick={count}>count</button>
				</div>
			</>
		);
	},
});
