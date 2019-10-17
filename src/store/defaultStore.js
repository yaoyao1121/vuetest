import commonStore from './store'

/***
 * 1.首先实例化一个commonStore类，传入模块名，模块名要对应utils/config.js
 *   根据模块名称会找到增删改查的URL，也可以找的其子列表的model
 * 2.新加一个 store模块
 * @type {Store<any>}
 */
let storeSchedule = new commonStore('schedule');
let orderCycle = new commonStore('orderCycle');
export default {
    schedule: {
        namespaced: true, //是否包含明名空间，必填，有重名不为true的时候会相互影响
        state: storeSchedule.state,
        actions: storeSchedule.actions('schedule'),
        getters: storeSchedule.getters,
        mutations: storeSchedule.mutations,
    },
    //物品订货周期
    orderCycle: {
        namespaced: true,
        state: orderCycle.state,
        actions: orderCycle.actions('orderCycle'),
        getters: orderCycle.getters,
        mutations: orderCycle.mutations,
    }
}
// module.exports ={
    
// }