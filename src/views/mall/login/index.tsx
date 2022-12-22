import { captcha, login } from '@/api/login';
import Result from '@/api/result';
import { defineComponent, onMounted, reactive, ref, Ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import style from './index.module.scss';
import { ElMessageBox } from 'element-plus';
import { JSXElement } from '@babel/types';

export default defineComponent({
	setup(props, context) {
		console.log('context', context);

		const router = useRouter();
		const route = useRoute();
		console.log('route', route);
		const theFormRef1 = ref(null);
		const theFormRef2 = ref(null);
		const captchaString = ref('');

		const requestCaptcha = async () => {
			const result: Result = await captcha();
			console.log('result', result);
			captchaString.value = window.URL.createObjectURL(result.data);
		};
		const loginForm = reactive({
			username: '',
			password: '',
			captcha: '',
		});

		const performLogin = async () => {
			console.log('do login', loginForm);
			const result: Result = await login(loginForm);
			console.log('login', result);
			const user = result.data.data;
			console.log('user', user);
			if (user) {
				router.replace({
					path: '/mall/index',
				});
			} else {
				ElMessageBox.alert('no gay');
			}
		};
		onMounted(() => {
			requestCaptcha();
		});
		const from1: Function = (): JSX.Element => (
			<el-form
				className={style.login_form}
				ref={theFormRef1}
				v-model={loginForm}
				label-position="top"
				size="small">
				<el-form-item label="用户名1" props="username">
					<el-input v-model={loginForm.username} type="text" autocomplete="off" />
				</el-form-item>
				<el-form-item label="密码" props="password">
					<el-input v-model={loginForm.password} type="text" autocomplete="off" />
				</el-form-item>
				<div className={style.captcha_parent}>
					{/* */}
					<el-form-item className={style.captcha_input} label="验证码" props="captcha">
						<el-input v-model={loginForm.captcha} type="text" autocomplete="off" />
					</el-form-item>
					<div className={style.captcha_wrapper} onClick={requestCaptcha}>
						<img src={captchaString.value} alt="" className={style.captcha_img} />
					</div>
				</div>
				<el-form-item>
					<el-button type="primary" onclick={performLogin}>
						Login
					</el-button>
				</el-form-item>
			</el-form>
		);
		const form2: JSX.Element = (
			<el-form
				className={style.login_form}
				ref={theFormRef2}
				v-model={loginForm}
				label-position="top"
				size="small">
				<el-form-item label="用户名2" props="username">
					<el-input v-model={loginForm.username} type="text" autocomplete="off" />
				</el-form-item>
				<el-form-item label="密码" props="password">
					<el-input v-model={loginForm.password} type="text" autocomplete="off" />
				</el-form-item>
				<div className={style.captcha_parent}>
					{/* */}
					<el-form-item className={style.captcha_input} label="验证码" props="captcha">
						<el-input v-model={loginForm.captcha} type="text" autocomplete="off" />
					</el-form-item>
					<div className={style.captcha_wrapper} onClick={requestCaptcha}>
						<img src={captchaString.value} alt="" className={style.captcha_img} />
					</div>
				</div>
				<el-form-item>
					<el-button type="primary" onclick={performLogin}>
						Login
					</el-button>
				</el-form-item>
			</el-form>
		);
		const form: Function = (type: number): JSX.Element => {
			if (type === 0) {
				return form2;
			}
			return from1();
		};

		return () => (
			<>
				<div className={style.login_root}>
					{form(1)}
					{/* {form2} */}
				</div>
			</>
		);
	},
});
