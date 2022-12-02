/**
 * @ Author: Captain
 * @ Create Time: 2022-09-14 08:53:47
 * @ Modified by: Captain
 * @ Modified time: 2022-12-01 14:23:41
 * @ Description:
 */

import axios, { type AxiosInstance } from 'axios';

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
