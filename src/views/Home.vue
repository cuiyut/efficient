<template>
  <div>
    <el-container>
      <Asidee />
      <el-container>
        <el-header>
          <Headerr />
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Asidee from '@/components/Aside.vue'
import Headerr from '@/components/Header.vue'

export default {
  name: 'EfficientHome',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
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
}
.el-main {
  background-color: #e9eef3;
  color: #333;
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
