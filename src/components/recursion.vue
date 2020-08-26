<template>
  <div>
      <li>
      <a href="srcript:;">{{tree.label}}</a>
      <ul>
        <Recursion v-if="tree.children" :tree="item" v-for='item in tree.children' :key="item.label"></Recursion>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
    name:'Recursion',
    props:['tree'],
}
</script>

<style scoped>
    div{text-align: left;}
    ul,li{list-style: disc;}
    li{margin-left:40px;}
</style>