import UserInfo from '@/entity/User';
import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

const userStore = defineStore('user', () => {
	const user: Ref<UserInfo | null> = ref(null);
	const saveUser = (userinfo: UserInfo) => {
		user.value = userinfo;
	};
	return { user, saveUser };
});

export default userStore;
