<template>
  <div class="ped-logo"
    @click="$router.push('/')">
    <i class="el-icon-s-tools"></i>
    Pedestal
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
.ped-logo {
  height: 100%;
  padding: 7px 10px;
  cursor: pointer;

  i {
    vertical-align: middle;
    font-size: 36px;
  }
}
</style>
