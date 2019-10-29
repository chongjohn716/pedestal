<template>
  <el-col :span="4">
    <div class="dep-app-card"
      @click="handleClick">
      <div class="dep-app-card-bg">
        {{data.name}}
      </div>
      <div class="dep-app-card-content">
        {{data.name}}
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'AppCard',

  data () {
    return {
    }
  },

  props: {
    data: Object
  },

  methods: {
    handleClick () {
      this.$router.push(`/${this.data.path}`)
    }
  }
}
</script>

<style lang="less" scoped>
.dep-app-card {
  position: relative;
  height: 100px;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  }
}

.dep-app-card-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-size: 36px;
  text-align: right;
  opacity: 0.1;
  filter: blur(1px);
  user-select: none;
}

.dep-app-card-content {
  padding: 20px;
}
</style>
