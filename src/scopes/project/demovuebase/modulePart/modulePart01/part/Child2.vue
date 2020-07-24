<template>
  <div>
    <ul>
      <li v-for="user in users2" :key="user" >{{ user }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Child2",
    props: {
      users2: { // 这个就是父组件中子标签自定义名字，data会被传递到这个变量中
        type: Array,
        required: true
      }
    },
    data(){
      return {

      }
    },
    methods: {
      alertHandler () {
        alert(this.users2)
      }
    }
  }
</script>

<style scoped type="text/less">

</style>
