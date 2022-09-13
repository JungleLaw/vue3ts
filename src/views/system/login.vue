<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:00:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-14 01:19:39
 * @ Description:
 -->

<template>
	<div class="login-root">
		<div class="title">登录</div>
		<component-a></component-a>
		<component-b></component-b>
		<el-form ref="loginFormRef" :model="loginForm" label-position="top" size="small" style="max-width: 200px">
			<el-form-item label="用户名" props="username">
				<el-input v-model="loginForm.username" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="密码" props="password">
				<el-input v-model="loginForm.password" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="验证码" props="captcha">
				<el-input v-model="loginForm.captcha" type="text" autocomplete="off" />
				<img :src="logo" alt="" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">Login</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '@/assets/logo.svg';
import ComponentA from '@/components/ComponentA/index.vue';
import ComponentB from '@/components/ComponentB/index.vue';
import { captcha } from '@/api/login';

export default defineComponent({
	components: {
		ComponentA,
		ComponentB,
	},
	data() {
		return {
			logo,
			loginForm: {
				username: '',
				password: '',
				captcha: '',
			},
		};
	},
	async mounted() {
		const result: object = await captcha();
		console.log('result', result);
	},
	methods: {
		login(): void {
			console.log('do login', this.loginForm);
		},
	},
});
</script>

<style lang="scss" scoped>
.login-root {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	.title {
		font-size: 40px;
		font-weight: 600;
		padding: 30px 0;
	}
}
</style>
