import axios from "axios";
import qs from "querystring";

//axios.defaults.baseURL="http://music.eleuu.com/";

//超时时间
axios.defaults.timeout = 100000;
//axios.defaults.headers["Content-Type"] = "application/json; charset=UTF-8";

//请求拦截
axios.interceptors.request.use(config => {
    config.headers["Content-Type"] = "application/json; charset=UTF-8";
    return config;
});

//响应拦截
axios.interceptors.response.use(response => {
    //console.log(response);
    return response;
}, error => {
    return Promise.reject(error)
});

let http = {
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
        });
    },
    get: (url, data) => {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {params: data})
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};

export default http;



