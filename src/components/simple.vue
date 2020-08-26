<template>
  <div>
    <el-radio-group v-model="tabView">
        <el-radio-button label="simple01">备选一</el-radio-button>
        <el-radio-button label="simple02">备选二</el-radio-button>
        <el-radio-button label="simple03">备选三</el-radio-button>
    </el-radio-group>
    <div style="margin:10px 0;"></div>
    <component :is="tabView"></component>
    <ul style='margin-top:40px'>
      <Recursion :tree="item" v-for="item in tree" :key="item.label"></Recursion>  
    </ul>
  </div>
</template>

<script>
import simple01 from './simple/simple01.vue';
import simple02 from './simple/simple02.vue';
import simple03 from './simple/simple03.vue';
import Recursion from './recursion.vue'; //递归组件
export default {
    name:'simple',
    data(){
        return{
            tabView:'simple01',
            tree:[
              {
                label:'A 1',
                children:[{
                  label:'B 1-1',
                  children:[{label:'C 1-1-1'}]
                }]
              },
              {
                label:'A 2',
                children:[{
                  label:'B 2-1',
                  children:[{label:'C 2-1-1'}]
                },
                {
                  label:'B 2-2',
                  children:[{label:'C 2-2-1'}]
                }]
              },
            ]
        }
    },
    components:{simple01,simple02,simple03,Recursion}
}
</script>

<style>

</style>