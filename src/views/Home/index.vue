<template>
  <ViewWraper class="dep-home">
    <AppList />
  </ViewWraper>
</template>

<script>
import ViewWraper from '@/components/ViewWraper'
import AppList from './AppList'

export default {
  name: 'home',
  components: {
    ViewWraper,
    AppList
  }
}
</script>

<style lang="less" scoped>
.dep-home {
  background-color: #ffffff;

  /deep/ .dep-view-content {
    padding: 100px 200px;
  }
}
</style>
