<template>
<!--  <div>-->
<!--    <ta-table :columns="columns" :data-source="data">-->
<!--      <span slot="operate" slot-scope="text, record">-->
<!--        <ta-table-operate :operate-menu="operateMenu"/>-->
<!--      </span>-->
<!--    </ta-table>-->
<!--  </div>-->

  <!-- 按钮 -->
  <ta-button> HEllo world! {{ msg}}}</ta-button>
</template>

<script>
// const columns = [
//   { title: 'name', dataIndex: 'name' },
//   { title: 'age', dataIndex: 'age' },
//   { title: '操作', dataIndex: 'operate', scopedSlots: { customRender: 'operate' } }
// ]
//
// const data = []
// for (let i = 0; i < 6; i++) {
//   data.push({
//     key: i.toString(),
//     name: 'Name ${i}',
//     age: i
//   })
// }
let msg = 'monster';
export default {
  name: 'modulePart1',
  data () {
    return {
      msg : msg
      // data,
      // columns,
      // visible: false,
      // operateMenu: [{
      //   name: '修改',
      //   class: 'ta-color-edit'
      // }, {
      //   name: '删除',
      //   class: 'ta-color-delete'
      // }, {
      //   name: '详情',
      //   class: 'ta-color-detail'
      // }, {
      //   name: '设置',
      //   class: 'ta-color-setting'
      // }, {
      //   name: '确认',
      //   class: 'ta-color-ok'
      // }, {
      //   name: '上传',
      //   class: 'ta-color-upload'
      // }, {
      //   name: '按钮很多文字时'
      // }
      // ]
    }
  }
}
</script>

<style scoped type="text/less">

</style>
