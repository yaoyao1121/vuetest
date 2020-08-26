<template>
  <div>
      <h2>我是组件兄弟2号</h2>
      <br>
      <h1 v-if="message">接受到信息：{{message}}</h1>
  </div>
</template>

<script>
export default {
    name:"Brother2",
    data(){
        return{
            message:''
        }
    },
    mounted(){
        this.$bus.$on("on-click",msg=>{
            this.message=msg
        })
    }
}
</script>

<style>

</style>