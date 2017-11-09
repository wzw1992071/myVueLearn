// 引入饿了么UI组件库中的message和load
import {Loading, Message} from 'element-ui'

import axios from 'axios'

// 设置axios的默认参数
// axios.defaults={
//     // 超时
//     timeout:5000,
//     // 基础url
//     baseURL:'http://api.exmple.com',
//      //`headers`选项是需要被发送的自定义请求头信息
//     //  headers: {'X-Requested-With':'XMLHttpRequest'},
//     //返回数据的格式
//     //其可选项是arraybuffer,blob,document,json,text,stream
//     // responseType:'json',//default
//     // 设置代理
//     proxy: {
//         host:'127.0.0.1',
//         port: 9000,
//         // auth: {
//         // username:'skda',
//         // password:'radsd'
//         // }
//     },
//     //`cancelToken`定义了一个用于取消请求的cancel token
//     // 详见cancelation部分(感觉不适合默认配置)
//     // cancelToken: new cancelToken(function(cancel){

//     // })
// }
axios.defaults.timeout=5000;
axios.defaults.baseURL = 'http://api.exmple.com';



var loadinginstace
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  loadinginstace = Loading.service({ fullscreen: true })  
  return config;
},function(err){
  //Do something with request error

    loadinginstace.close();
    Message.error({
        message:"请求超时"
    })
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  loadinginstace.close();
  return res;
},function(err){
  //Do something with response error

    loadinginstace.close();
    Message.error({
        message:"请求失败"
    })
  return Promise.reject(error);
})

export default axios