import commonApi from "../api/common";

export default class commonStore{
    state={
        total: [{}],   //合计
    }
    getters={
        total: state => state.total,
    }
    mutations={
        setTotal(state, total) {
            state.total = total;
        }
    }
    actions(moduleName){
        let dataApi = new commonApi(moduleName);
        return {
            postData({commit, dispatch}, param){
                let typeName=param.typeName;
                let data=param.data;
                console.log(typeName,'-----地址接口----');
                console.log(data,'-----向后台发送数据-----')
                dataApi.printUrl(typeName)
            }
        }
    }
}