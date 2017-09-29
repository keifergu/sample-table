export default {
  name: 'row',
  functional: true,
  render (h, context) {
    // data 为该列的数据，columns 为列的配置
    const { data, columns, index } = context.props
    console.log(context)
    const row = columns.map(col => {
      switch (col.type) {
        case 'selection':
          return <td><input type="checkbox"/></td>
        default:
          return <td>{col.template ? col.template({data, index}) : data[col.prop]}</td>
      }
    })
    return row
  }
}
