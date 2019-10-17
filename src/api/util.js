import axios from 'axios'
import {Message, Loading} from 'element-ui'
const envUrl = window.serverUrl.envUrl
const ssoUrl =window.serverUrl.ssoUrl
console.log('envUrl',envUrl)
// const  envUrl= 'http://ecsc.meishijia.com'
// const ssoUrl= 'http://sso.meishijia.com'

const pref = envUrl+ "/ecsc-core-web"
const filePref = envUrl+ "/ecsc-fileserver-rpc"
const loginControllerUrl = pref+'/loginController/index';


const login = 'login/'
let token = localStorage.getItem('token');
let headersObj = {"headers": {'token': token}}
axios.defaults.withCredentials = true
let loadingInstance;
axios.interceptors.request.use(
    config => {
        // var xtoken = getXtoken()
        // if(xtoken != null){
        //     config.headers['X-Token'] = xtoken
        // }
        // if(config.method=='post'){
        //     config.data = {
        //         ...config.data,
        //         _t: Date.parse(new Date())/1000,
        //     }
        // }else if(config.method=='get'){
        //     config.params = {
        //         _t: Date.parse(new Date())/1000,
        //         ...config.params
        //     }
        // }

        return config
    }, function (error) {
        return Promise.reject(error)
    }
)



axios.interceptors.response.use(
    function (response) {
        // 出现错误，显示错误提示

         // loadingInstance.close()
        // Message({
        //     message: 'aa',
        //     type: 'error',
        //     duration: 5 * 1000
        // });
        return response
    }, function (error) {

        if (error.response) {
            return Promise.reject(error)
        } else {

            window.location.href = ssoUrl +'/login?service='+ encodeURIComponent(loginControllerUrl)
        }
        // Do something with response error
    })

export function get(url, option) {

    return axios.get(`${pref}${url}`, {
        ...headersObj,
        emulateJSON: true,
        ...option
    })
}

export function post(url, body, option) {

    headersObj = {"headers": {'token': localStorage.getItem('token')}}
    console.log(localStorage.getItem('ticket'))
    // if(localStorage.getItem('ticket')) {
    //     url += '?ticket=' + localStorage.getItem('ticket')
    // }
    return axios.post(`${pref}${url}`, body, {
        ...headersObj,
        emulateJSON: true,
        ...option,
        withCredentials: true,

    }).catch(function (error) {
        if (error.code > 0) {
            // alert(error.msg);
        }
        throw 0;
    })

}

export function put(url, body, option) {

    return axios.put(`${pref}${url}`, body, {
        ...headersObj,
        emulateJSON: true,
        ...option
    })

}

export function del(url, option) {
    return axios.delete(`${pref}${url}`, {
        ...headersObj,
        emulateJSON: true,
        ...option
    })
}

export function getfilePref() {
    return filePref;
}

export function getSsoUrl() {
    return ssoUrl;
}
export function getPref() {
    return envUrl;
}

export function getLoginControllerUrl(){
    return loginControllerUrl;
}



// export function auth(id) {
//     return Vue.http.get(`${authUrl}user/${id}`,{
//         ...headersObj,
//         emulateJSON: true
//     })
// }
