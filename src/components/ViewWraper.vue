<template>
  <div class="dep-view-wraper">
    <HeaderBar class="dep-view-header">
      <slot name="header-left"
        slot="left"></slot>
      <slot name="header-center">
      </slot>
    </HeaderBar>
    <section class="dep-view-content">
      <slot />
    </section>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'

export default {
  name: 'dep-view-wraper',

  data () {
    return {
    }
  },

  components: {
    HeaderBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.dep-view-wraper {
}
</style>
