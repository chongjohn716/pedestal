<template>
  <section class="ped-header-bar">
    <div class="ped-header-left">
      <slot name="left">
        <Logo />
      </slot>
    </div>
    <div class="ped-header-center">
      <slot></slot>
    </div>
    <div class="ped-header-right">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'HeaderBar',
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
.ped-header-bar {
  height: 50px;
  display: flex;
  background-color: #06213c;
  color: #d6d6d6;
}

.ped-header-left,
.ped-header-right {
  flex-shrink: 0;
  flex-grow: 0;
}

.ped-header-center {
  flex: 1;
}
</style>
