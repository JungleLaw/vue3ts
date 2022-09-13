import request from '@/commons/http/request';
import loginVue from '@/views/system/login.vue';

const CAPTCHA: string = '/noauth/sys/captcha';

export function login(): Promise<object> {
	return request({});
}
export function captcha(): Promise<object> {
	return request({
		url: CAPTCHA,
		method: 'GET',
	});
}
