import axios from 'axios';
import { Message } from 'element-ui';
let localhosts = '/api'; //请求的后台域名
axios.interceptors.request.use(config => { //请求之前(可以设置token)
    return config
}, error => {
    Message.error(error);
    return Promise.reject(error);
});
axios.interceptors.response.use(response => { //数据拿到之后
    return response.data
}, error => {
    Message.error('Http请求失败，请联系管理员');
    return Promise.reject(error.response);
});

function successfun(res) { //处理后台返回的非200错误
    if (res.status == 500) {
        Message.error(res.data);
    }
    return res
}

function errorfun(res) {
    Message.error(res.message);
    return res;
}
export default {
    post(url, data) { //post请求
        return axios({
            method: 'post',
            baseURL: localhosts,
            url,
            params: data,
            withCredentials: true,
            timeout: 5000, //响应时间
        }).then(res => {
            console.log(res)
            return successfun(res)
        }, err => {
            return errorfun(err);
        })
    },
    get(url, params) { //get请求
            return axios({
                method: 'get',
                baseURL: localhosts,
                url,
                params,
                withCredentials: true,
                timeout: 5000,
            }).then(res => {
                return successfun(res)
            }, err => {
                return errorfun(err)
            })
        }
        // (delete, put等请求同上)...
}