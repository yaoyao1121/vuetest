<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links submit</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <el-form>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search"  @click="onSubmit()">搜索</el-button>
      </el-form-item>
    </el-form> 

    <form class="layui-form" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">开关</label>
        <div class="layui-input-block">
          <input type="checkbox" name="switch" lay-skin="switch">
        </div>
      </div>
    </form>

    <!-- 过渡绘画 -->
    <button @click="show = !show">Toggle</button>
    <transition name='fade'>
      <p v-if="show">hello</p>
    </transition>
    <router-link to="/memu">导航</router-link>
    <Brother1 :fatherData="fatherData" @targetUsername='getUsername'></Brother1>
    <p>用户名：{{username}}</p>
    <br>
    <Brother2></Brother2>
  </div> 
</template>
<script>
// import {actions} from '../utils/common.js';
// // console.log('-----config---',config.schedule)
// console.log(actions('schedule'),'common')
// console.log(window.serverUrl,'-----config.js-hello--')
import {mapGetters, mapMutations, mapActions} from 'vuex'
import Brother1 from './brother1'
import Brother2 from './brother2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:true,
      fatherData:'父组件向子组件发送数据',
      username:''
    }
  },
  components:{Brother1,Brother2},
  methods:{
    ...mapActions('schedule', ['postData']),
    onSubmit(){
      // alert('77777')
      let options = {name:'zx',age:39,sex:'1'}
      this.postData({typeName: 'list', data: options})
    },
    getUsername(msg){
      this.username=msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
