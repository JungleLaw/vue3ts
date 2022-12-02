import request from '@/commons/http/request';
class Contants {
	// static readonly LOGIN: string = '/noauth/sys/login';
	// static readonly CAPTCHA: string = '/noauth/sys/captcha';
	static readonly LOGIN: string = '/api/user/login';
	static readonly CAPTCHA: string = '/api/user/captcha';
}
export interface LoginForm {
	username: string;
	password: string;
	captcha: string;
}

export function login(params: LoginForm): Promise<any> {
	// return request.post(Contants.LOGIN, params);
	return request({
		url: Contants.LOGIN,
		method: 'POST',
		data: params,
	});
}
export function captcha(): Promise<any> {
	return request({
		url: Contants.CAPTCHA,
		responseType: 'blob',
		method: 'GET',
	});
}
