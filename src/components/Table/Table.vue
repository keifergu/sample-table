<template>
  <div>
    <table>
      <tr>
        <slot></slot>
      </tr>
      <!-- 根据源数据的长度，渲染列表的行 -->
      <tr v-for="(row, index) in store.state.originData" :key="index"
        @click="rowClick(row, index, $event)"
        @contextmenu.prevent="log">
        <!-- 根据 columns 的配置项数，确定每行渲染的列 -->
        <row :data="row" :columns="store.state.columns" :index="index"/>
      </tr>
    </table>
  </div>
</template>

<script>
import store from './store'
import Row from './Row'
import ContextMenu from './ContextMenu'

/**
 * 从<fix-column>组件中获取我们的需要的配置信息
 * @param  {VNode}  childNode 需要进行属性提取的子组件
 * @return {Object}
 */
function getColumnConfig (childNode) {
  const childConfigList = ['prop']
  const childAttrList = ['type']
  let columns = {}
  childAttrList.forEach(prop => {
    columns[prop] = childNode.$attrs && childNode.$attrs[prop]
  })
  childConfigList.forEach(prop => {
    columns[prop] = childNode[prop]
  })
  // TODO: undefined 时的数据处理
  // 获取组件里面的scoped模板渲染函数
  columns.template = childNode.$scopedSlots.default
  return columns
}

export default {
  name: 'fix-table',
  props: ['data'],
  data () {
    store.commit('updateOriginData', {
      data: this.data
    })
    return {
      store
    }
  },
  computed: {

  },
  methods: {
    rowClick (row, index, event) {
      this.$emit('click', row, index, event)
    },
    log (e) {
      console.log(e)
    }
  },
  mounted () {
    // 挂载时才可以通过 $children 获取子组件，然后获取配置信息
    // 此处可能会存在子组件没有渲染完的问题，可以换成 nextTick
    const columns = this.$children.map(getColumnConfig)
    console.log(this)
    this.store.commit('updateColumns', {
      columns
    })
    console.log(this.store)
  },
  components: { Row, ContextMenu }
}
</script>
