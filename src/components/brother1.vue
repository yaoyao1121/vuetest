<template>
  <div>
      <h1>我是兄弟组件1号</h1>
      <button @click="send()">向兄弟2号传送信息</button>
      <h2>接收数据：{{fatherData}}</h2>
      <div>
          <label>
              <span>用户名</span>
              <input type="text" v-model='username' @input='setUsername()'>
          </label>
      </div>
  </div>
</template>

<script>
export default {
    name:"Brother1",
    props:["fatherData"],
    data(){
        return{
            username:''
        }
    },
    methods:{
        send(){
            this.$bus.$emit("on-click",'2号2号我是1号')
        },
        setUsername(){
            this.$emit("targetUsername",this.username)
        }
    }
}
</script>

<style>

</style>