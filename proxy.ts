const internal = {
	'/api/user': {
		// target: 'http://192.168.1.102:7001',
		target: 'http://127.0.0.1:3888',
		// target: 'http://10.10.18.60:7001',
		changeOrigin: true,
	},
};

const external = {
	'/user': {
		// target: 'http://192.168.1.102:7001',
		target: 'http://127.0.0.1:7001',
		// target: 'http://10.10.18.60:7001',
		changeOrigin: true,
	},
};

export { internal, external };
