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
  background-color: #e7e7e7;
}
</style>
