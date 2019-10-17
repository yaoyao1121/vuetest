
import defaultStore from "./defaultStore.js"
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        ...defaultStore
    }  
})