<template>
  <div>
    <h1>vue学习</h1>
    <span>开始参数msg：{{ msg }}</span>

    <!-- v-if -->
    <div>
      <input v-if="visible" :value=" 'Visible now is' + visible " >
      <span v-if="!visible">Visible now is {{ visible }}</span>
      <br/>
      <br/>
      <button @click="toggle">toggle</button>
    </div>

    <br/>
    <br/>
    <h2>v-for</h2>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <!-- v-for -->
    <div>
      <!-- 设置list参数为数组形式的list有id和value： list[{id:'1',value:'11'},{id:'2',value:'22'}] -->
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.value }}</li>
      </ul>
    </div>


    <br/>
    <br/>
    <h2>父组件向子组件传值(props)</h2>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <div>
      <Child :users="data"></Child> <!-- 使用v-bind将data传递到users组件的props内，此处使用了冒号简写: -->
    </div>


    <br/>
    <br/>
    <h2>子组件向父组件传值($emit)</h2>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <div>
      <!-- 使用v-on监听子组件抛出的userClick事件，并设置事件回调函数为userClickHandler，此处使用了@简写 -->
      <Child1 :users1="data1" @userClick1="userClickHandler"></Child1>
    </div>


    <br/>
    <br/>
    <h2>ref  尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 ref 这个 attribute 为子组件赋予一个 ID 引用</h2>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <div>
      <Child2 ref="childComponent" :users2="data2" ></Child2>
      <Child1 ref="childComponent1" :users1="data1" ></Child1>
      <button @click="btnClickHandler">Click Me</button>
    </div>


    <br/>
    <br/>
    <h2>slot</h2>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <h3>最简单的插槽应用</h3>
    <hr style="height:1px;border:none;border-top:1px solid #555555;" >
    <div>
      <Child3 ref="childComponent3" :users3="data3" >
        <ul>
          <li v-for="user in data3" :key="user">{{user}}</li>
        </ul>
      </Child3>
    </div>
  </div>
</template>

<script>

  //添加组件
import partComponent from './part/partComponent'
import Child from './part/Child' // 引入users组件
import Child1 from './part/Child1' // 引入users组件
import Child2 from './part/Child2' // 引入users组件
import Child3 from './part/Child3' // 引入users组件


let msg = 'monster';
export default {
  name: 'modulePart1',
  components: {partComponent,Child,Child1,Child2,Child3},//添加组件
  data () {
    return {
      msg : msg,
      visible : true,
      list : [
        {
          id : '001',
          value : 'item-1'
        }, {
          id: '002',
          value: 'item-2'
        }, {
          id: '003',
          value: 'item-3'
        }, {
          id: '004',
          value: 'item-4'
        }, {
          id: '005',
          value: 'item-5'
        }
      ],
      data: ['Henry', 'Bucky', 'Emily'],
      data1: ['Henry', 'Bucky', 'Emily','北京','上海','成都','广州','西安','长春'],
      data2: ['Henry', 'Bucky', '澳大利亚','中国','美国','老挝','俄罗斯','西班牙','英国'],
      data3: ['Henry', 'Bucky', 'one','two','three','thour','five','six','site']
    }
  },
  methods: {
    toggle(){
      this.visible = !this.visible  //就是设置值
    },
    userClickHandler (user) {
      // user接收userClick事件的参数，即从子组件将值传递到父组件
      alert(user + ' was clicked.')
    },
    btnClickHandler () {
      console.log(this.$refs.childComponent.$el)
      this.$refs.childComponent.alertHandler()
      this.$refs.childComponent1.alertHandlerchild1()
    }
  }
}
</script>

<style scoped type="text/less">
  p {
    margin: 0;
    padding: 0;
  }
</style>
