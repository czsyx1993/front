<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user">{{user}}</li> <!-- 遍历传递过来的值，然后呈现到页面 -->
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Child",
    props: {
      users: { // 这个就是父组件中子标签自定义名字，data会被传递到这个变量中
        type: Array,
        required: true
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped type="text/less">

</style>
