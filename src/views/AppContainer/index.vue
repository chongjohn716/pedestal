<template>
  <ViewWraper class="dep-app-container">
    <div slot="header-center">
      12312
    </div>
    <div class="dep-app-content">

    </div>
  </ViewWraper>
</template>

<script>
import axios from 'axios'
import ViewWraper from '@/components/ViewWraper'
import { registerApplications } from '@/app-mgr'
let inited = false

export default {
  name: 'AppContainer',

  data () {
    return {
    }
  },

  components: {
    ViewWraper
  },

  methods: {
    getAppList () {
      return axios.get('/data/app-list.json')
    },

    initSingleSpa () {
      if (inited) {
        return
      }
      this.getAppList().then(({ data }) => {
        registerApplications(data, '.dep-app-content')
        inited = true
      })
    }
  },

  created () {
    this.initSingleSpa()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
}
</style>
