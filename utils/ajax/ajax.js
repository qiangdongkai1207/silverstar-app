import Request from './request';

const ajax1 = new Request();

ajax1.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'http://127.0.0.1/'; /* 根域名不同 */
	return config;
});

ajax1.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	var token = undefined;
	try {
		token = uni.getStorageSync('token');
	} catch (e) {}

	if (token != undefined && token != '') {
		config.header['token'] = token;
	} else {
		delete config.header["token"];
	}
	try {
		var user = uni.getStorageSync('user');
		if(user == undefined || user == ''){
			config.header['cd01'] = "410001";
			config.header['username'] = "sys";
			//config.header['userid'] =  "";
			//config.header['cd_id'] = "";
		}else{
			config.header['cd01'] = user['userInfo']['cd01'] ;
			config.header['username'] = user['userInfo']['username'];
			config.header['userid'] = user['userInfo']['userid'];
			config.header['cd_id'] = user['cd_id'];
		}
	} catch (e) {}
	return config;
});

ajax1.interceptor.response((response) => { /* 请求之后拦截器 */
	return response['data'];
}, (response) => { // 请求错误做点什么
	console.log("错误");
	return response;
});

export default ajax1;
