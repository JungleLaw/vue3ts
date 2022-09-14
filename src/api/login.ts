import request from '@/commons/http/request';

class Contants {
	static readonly LOGIN: string = '/noauth/sys/login';
	static readonly CAPTCHA: string = '/noauth/sys/captcha';
}
export interface LoginForm {
	username: string;
	password: string;
	captcha: string;
}

export function login(params: LoginForm): Promise<object> {
	return request({ url: Contants.LOGIN, method: 'POST', data: params });
}
export function captcha(): Promise<{ data: string }> {
	return request({
		url: Contants.CAPTCHA,
		method: 'GET',
	});
}
