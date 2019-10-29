<template>
  <div class="dep-app-list">
    <el-row type="flex"
      justify="start"
      :gutter="30">
      <AppCard v-for="(app, i) of apps"
        :key="i"
        :data="app" />
    </el-row>
  </div>
</template>

<script>
import AppCard from './AppCard'
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      apps: []
    }
  },

  components: {
    AppCard
  },

  created () {
    axios.get('/data/app-list.json').then(res => {
      this.apps = res.data
    })
  }
}
</script>

<style lang="less" scoped>
.dep-app-list {
  margin: 100px 200px;
}
</style>
