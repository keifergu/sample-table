<template>
  <div id="app">
    <fix-table :data="data" @click="rowClick">
      <fix-column
        label="姓名"
        prop="name">
      </fix-column>
      <fix-column
        label="年龄"
        prop="age">
        <template scope="scope">
          {{scope.data.age}}
        </template>
      </fix-column>
      <fix-column
        label="Address"
        prop="address">
      </fix-column>
      <fix-column
        label="Option">
        <template scope="scope">
          <button @click="deleteData(scope.index)">Delete</button>
        </template>
      </fix-column>
      <template slot="menu">
        <ul class="menu" id="menu">
          <li><a href="###">复制</a></li>
          <li><a href="###">粘贴</a></li>
          <li><a href="###">剪切</a></li>
          <li><a href="###">刷新</a></li>
        </ul>
      </template>
    </fix-table>
  </div>
</template>

<script>
import { fixTable, fixColumn } from './components/Table'

export default {
  name: 'app',
  data () {
    return {
      data: [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 12,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 22,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 62,
        address: '西湖区湖底公园1号'
      }]
    }
  },
  methods: {
    deleteData (key) {
      this.data.splice(key, 1)
    },
    rowClick (recorder, index, event) {
      console.log(arguments)
    }
  },
  components: {
    fixTable,
    fixColumn
  }
}
</script>
