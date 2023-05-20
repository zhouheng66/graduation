//对于axios进行二次封装
import axios from 'axios';
//在当前目录中引入store
import store from '@/store';
//引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

// 用户登录后 获取token
const token = localStorage.getItem('token')
console.log(token)
//利用axios对象的方法，去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    // baseURL:'/api',
    //代表请求超时的时间5S
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    // 设置请求头
    // console.log(token,111)
    config.headers.authorization = token

    //进度条开始动
    nprogress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use(
    (res)=>{
        nprogress.done();
        return res.data;
},
    (error)=>{
        // return Promise.reject(new Error('faile'));
        console.log('abc');
})


//对外暴露
export default requests;