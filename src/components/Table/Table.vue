<template>
  <div>
    <table>
      <tr>
        <slot></slot>
      </tr>
      <!-- 根据源数据的长度，渲染列表的行 -->
      <tr v-for="(row, index) in data" :key="index">
        <!-- 根据 columns 的配置项数，确定每行渲染的列 -->
        <row :data="row" :columns="columns" :index="index"/>
      </tr>
    </table>
  </div>
</template>

<script>
import Row from './Row'

/**
 * 从<fix-column>组件中获取我们的需要的配置信息
 * @param  {VNode}  childNode 需要进行属性提取的子组件
 * @return {Object}
 */
function getColumnConfig (childNode) {
  const childConfigList = ['prop']
  let config = {}
  childConfigList.forEach(prop => {
    config[prop] = childNode[prop]
  })
  // TODO: undefined 时的数据处理
  // 获取组件里面的scoped模板渲染函数
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
  mounted () {
    // 挂载时才可以通过 $children 获取子组件，然后获取配置信息
    // 此处可能会存在子组件没有渲染完的问题，可以换成 nextTick
    this.columns = this.$children.map(getColumnConfig)
  },
  components: { Row }
}
</script>

<style scoped>
table {

}
</style>
