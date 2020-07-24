<template>
  <div>
    <ul>
      <!-- 监听li标签的点击事件，设置回调函数为userItemClickHandler，并把user传进该回调函数 -->
      <li v-for="user in users1" :key="user" @click="userItemClickHandler(user)">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Child1",
    props: {
      users1: { // 这个就是父组件中子标签自定义名字，data会被传递到这个变量中
        type: Array,
        required: true
      }
    },
    data(){
      return {

      }
    },
    methods: {
      userItemClickHandler (user) {
        // 使用$emit抛出事件，并将user传入该事件的回调函数内
        this.$emit('userClick1', user)
      },
      alertHandlerchild1(){
        alert(this.users1);
      }
    }
  }
</script>

<style scoped type="text/less">

</style>
