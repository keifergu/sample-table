<template>
<div>
  <th>{{label}}</th>
  <slot text="scopeText"></slot>
</div>
</template>

<script>
export default {
  name: 'fix-column',
  props: ['prop', 'label'],
  mounted () {
    let defaultV = this.$scopedSlots.default
    if (defaultV) {
      console.log(defaultV)
      console.log(defaultV())
    }
  }
}
</script>
