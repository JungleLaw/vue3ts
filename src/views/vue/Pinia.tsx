/**
 * @ Author: Captain
 * @ Create Time: 2022-12-12 11:44:09
 * @ Modified by: Captain
 * @ Modified time: 2022-12-12 17:04:35
 * @ Description:
 */

import userStore from '@/stores/user';
import { storeToRefs } from 'pinia';
import { computed, defineComponent, Ref, ref, watch, watchEffect } from 'vue';

export default defineComponent({
	setup(props, context) {
		const store = userStore();
		const { user } = storeToRefs(store);
		const { saveUser } = store;
		const username: Ref<string> = ref('');
		console.log('user', user.value === null);
		const name = computed(() => {
			console.log('computed', user?.value);
			return user.value?.username || 'none';
		});
		watchEffect(() => {
			username.value = user.value?.username;
			console.log('username.value', username.value);
		});

		const save = () => {
			saveUser({ username: 'abc' });
		};

		return () => (
			<>
				<button onClick={save}>save</button>
				<div>{user.value?.username || 'null'}</div>
				<div>{username.value || 'undefined'}</div>
				<div>{name?.value}</div>
			</>
		);
	},
});
