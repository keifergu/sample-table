<template>
  <div>
    <table>
      <tr>
        <slot></slot>
      </tr>
      <!-- 根据源数据的长度，渲染列表的行 -->
      <tr v-for="(row, index) in data" :key="index">
        <!-- 根据 columns 的配置项数，确定每行渲染的列 -->
        <row :data="row" :columns="columns"/>
      </tr>
    </table>
  </div>
</template>

<script>
import Row from './Row'

const childConfigList = ['prop']

/**
 * @param {VNode} childNode 需要进行属性提取的子组件
 */
function getColumnConfig (childNode) {
  let config = {}
  childConfigList.forEach(prop => {
    config[prop] = childNode[prop]
  })
  // TODO: undefined 时的数据处理
  config.template = childNode.$scopedSlots.default
  return config
}
export default {
  name: 'fix-table',
  props: ['data'],
  data () {
    return {
      columns: []
    }
  },
  computed: {

  },
  created () {
    console.log(this)
  },
  mounted () {
    this.columns = this.$children.map(getColumnConfig)
  },
  components: { Row }
}
</script>
