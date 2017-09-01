export default {
  name: 'row',
  functional: true,
  render (h, context) {
    console.log(context)
    // data 为该列的数据，columns 为列的配置
    const { data, columns } = context.props
    const row = columns.map(col =>
      col.template ? col.template({data}) : h('td', data[col.prop]))
    return h('div', row)
  }
}
