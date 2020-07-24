<template>
  <ta-button>{{buttonKey}}</ta-button>
</template>

<script>
  export default {
    name: "partComponent",
    props: {
      buttonKey: {
        type: String
      }
    },
    data(){
      return {
        buttonKey:'按钮'
      }
    }
  }
</script>

<style scoped type="text/less">

</style>
