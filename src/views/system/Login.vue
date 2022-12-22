<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:00:58
 * @ Modified by: Captain
 * @ Modified time: 2022-12-22 11:20:58
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
			<div class="captcha-parent">
				<el-form-item label="验证码" props="captcha">
					<el-input class="captcha-input" v-model="loginForm.captcha" type="text" autocomplete="off" />
				</el-form-item>
				<div class="captcha-wrapper" @click="requestCaptcha">
					<img :src="captcha" alt="" class="captcha" />
				</div>
			</div>
			<el-form-item>
				<el-button type="primary" @click="login">Login</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { captcha, login } from '@/api/login';
import Result from '@/api/result';
import logo from '@/assets/logo.svg';
import ComponentA from '@/components/componentA/ComponentA.vue';
import ComponentB from '@/components/componentB/ComponentB.vue';
import { ElMessageBox } from 'element-plus';
import { defineComponent } from 'vue';

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
			captcha: '',
		};
	},
	mounted() {
		this.requestCaptcha();
	},
	methods: {
		async login() {
			// console.log('do login', this.loginForm);
			// const result: Result = await login(this.loginForm);
			// console.log('login', result);
			// const user = result.data.data;
			// console.log('user', user);
			// if (user) {
			this.$router.replace({
				path: '/home',
			});
			// } else {
			// 	ElMessageBox.alert('no gay');
			// }
		},
		async requestCaptcha() {
			const result: Result = await captcha();
			console.log('result', result);
			this.captcha = window.URL.createObjectURL(result.data);
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
	.captcha-parent {
		display: flex;
		flex-flow: row nowrap;
		.captcha-input {
			width: 100px;
		}
		.captcha-wrapper {
			width: 80px;
			height: 50px;

			.captcha {
				margin: 10px;
				background-color: white;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
