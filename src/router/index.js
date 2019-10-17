import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import config from '../../static/config'
import commonApi from "../api/common"
const memu = r => require.ensure( [], () => r (require('@/components/memu.vue'))) //菜单

Vue.use(Router)
let datapi = new commonApi('common');
console.log(datapi,'---datapi--')
datapi.printUrl('printData')
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
