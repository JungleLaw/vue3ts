import axios from 'axios';
import type { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
	baseURL: '',
	timeout: 5000,
});

service.interceptors.request.use(
	config => {
		const cfg = config;
		return cfg;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	},
);

service.interceptors.response.use(
	response => response,
	error => error,
);

export default service;
