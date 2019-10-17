// import {get, post, put, del} from './util'
import  config from '../utils/config'


/***
 * 调用后台处理数据的基类，普通的模块基本都包含了，
 * 如果有新的页面需要特殊的方法，可以继承本类
 */
export default class  commonApi {
    //设置模块名称，根据模块名称获取到后台查询数据的URL地址
    constructor(moduleName){
        this.name=moduleName;
    }

    // 输出该模块下的接口
    printUrl(type){
        let url=config[this.name][type]
        console.log(url,'---接口文档url---')
    }
     /***
     * 根据条件查询数据列表
     * @param options
     * @returns {*}
     */
     searchList(options) {
        return post(config[this.name]['search'], options)
    }
    /***
     * 获取数据列表
     * @param options
     * @returns {*}
     */
    getList(options) {
        return post(config[this.name]['list'], options)
    }

    /***
     * 获取数据项，一般是根据数据的ID查询
     * @param options
     * @returns {*}
     */
    getItem(options) {
        return post(config[ this.name]['item'], options)
    }

    /**
     * 删除数据
     * @param options
     * @returns {*}
     */
    delData(options) {
        return post(config[ this.name]['delete'], options)
    }

    /**
     * 更新数据
     * @param options
     * @returns {*}
     */
    updateData(options) {
        return post(config[ this.name]['update'], options)
    }

    /**
     * 保存数据
     * @param options
     * @returns {*}
     */
    saveData(options) {
        return post(config[ this.name]['save'], options)
    }

    post(type,options,success,error){
        return post(config[ this.name][type], options).then(data=>{
            if(success){
                success(data);
            }else {
                return data;
            }
        },errorRes=>{
            if(error){
                error(errorRes);
            }else {
                return errorRes;
            }
        })
    }

    getTotal(options){
        if(config.total){
            return post(config[ this.name]['total'], options)
        }
        else {
            console.log('---获取品相数，没有后台接口配置---')
            return {}
        }


    }
}
