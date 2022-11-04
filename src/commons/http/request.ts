/**
 * @ Author: Captain
 * @ Create Time: 2022-09-14 08:53:47
 * @ Modified by: Captain
 * @ Modified time: 2022-11-04 18:10:49
 * @ Description:
 */

// import axios, { type AxiosInstance } from 'axios';

// const service: AxiosInstance = axios.create({
// 	baseURL: '',
// 	timeout: 5000,
// });

// service.interceptors.request.use(
// 	config => {
// 		const cfg = config;
// 		return cfg;
// 	},
// 	error => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	},
// );

// service.interceptors.response.use(
// 	response => response,
// 	error => error,
// );
const service = (params: any) => {
	console.log('request');
	return new Promise(reslove => {});
};
export default service;
