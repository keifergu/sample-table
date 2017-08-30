<template>
  <table>
    <tr>
      <slot></slot>
    </tr>
    <tr v-for="(row, index) in data">
      <td v-for="column in columns">{{row[column.prop]}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'fix-table',
  props: ['data'],
  data () {
    return {
      columns: []
    }
  },
  computed: {
    children () {
      return this.$children
    }
  },
  created () {
    console.log(this)
  },
  mounted () {
    this.columns = this.$children
  }
}
</script>
