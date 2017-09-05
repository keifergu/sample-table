export default {
  name: 'row',
  functional: true,
  render (h, context) {
    // data 为该列的数据，columns 为列的配置
    const { data, columns, index } = context.props
    const row = columns.map(col => h('td',
      col.template ? col.template({data, index}) : data[col.prop]))
    return row
  }
}
