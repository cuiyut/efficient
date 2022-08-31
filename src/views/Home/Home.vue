<template>
  <div>
    <el-container>
      <Asidee :isCollapse="isCollapse" />
      <el-container>
        <el-header>
          <Headerr :isCollapse="isCollapse" @toggle="toggle()" />
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Asidee from './Aside.vue'
import Headerr from './Header.vue'

export default {
  name: 'EfficientHome',
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {},
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    Asidee,
    Headerr
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid grey;
}
.el-main {
  background-color: #ffffff;
  color: #333;
  height: 90vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
