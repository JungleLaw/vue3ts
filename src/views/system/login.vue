<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:00:58
 * @ Modified by: Captain
 * @ Modified time: 2022-09-13 01:44:11
 * @ Description:
 -->

<template>
	<div class="login-root">
		<div class="title">登录</div>
		<el-form ref="loginFormRef" :model="loginForm" label-position="top" size="small" style="max-width: 200px">
			<el-form-item label="用户名" props="username">
				<el-input v-model="loginForm.username" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="密码" props="password">
				<el-input v-model="loginForm.password" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="验证码" props="captcha">
				<el-input v-model="loginForm.captcha" type="text" autocomplete="off" />
				<img :src="img" alt="" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">Login</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import img from '../../../src/assets/logo.svg';

export default defineComponent({
	data() {
		return {
			img,
			loginForm: {
				username: '',
				password: '',
				captcha: '',
			},
		};
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
