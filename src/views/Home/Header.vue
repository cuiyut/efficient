<template>
  <div>
    <div class="header">
      <!-- 控制侧边栏隐藏显示 -->
      <div class="changeAside">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggle()"></i>
      </div>
      <!-- 头部用户信息 -->
      <div class="user-msg">
        <el-badge :value="10" class="item">
          <p style="transform: rotate(-15deg)" class="el-icon-s-flag"></p>
        </el-badge>
        <el-badge :value="10" class="item" type="warning">
          <p class="el-icon-message-solid"></p>
        </el-badge>
        <el-badge :value="10" class="item" type="info">
          <p class="el-icon-message"></p>
        </el-badge>
        <p :class="!isFull ? 'el-icon-full-screen' : 'el-icon-rank'" @click="full"></p>
        <el-dropdown>
          <div class="user-right">
            <p class="el-icon-s-custom headImg" style="margin-right: 10px"></p>
            <p style="font-size: 14px; color: #6c6c6c">超级管理员</p>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="edit">修改密码</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EfficientHeader',

  props: ['isCollapse'],
  data() {
    return {
      /**全屏标识 */
      isFull: false
    }
  },

  mounted() {},

  methods: {
    /**侧边栏切换 */
    toggle() {
      this.$emit('toggle')
    },
    /**全屏 */
    full() {
      if (this.isFull) {
        // 如果已经全屏了就退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        // 如果不是全屏就变成全屏
        if (document.documentElement.RequestFullScreen) document.documentElement.RequestFullScreen()
        if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen()
        if (document.documentElement.webkitRequestFullScreen) document.documentElement.webkitRequestFullScreen()
        if (document.documentElement.msRequestFullscreen) document.documentElement.msRequestFullscreen()
      }
      this.isFull = !this.isFull
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .changeAside {
    color: #9a9a9a;
    line-height: 70px;
    font-size: 36px;
    cursor: pointer;
  }
  .user-msg {
    width: 330px;
    color: #cecece;
    padding: 0 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headImg {
      border: 1px solid #cecece;
      border-radius: 50%;
      padding: 5px;
      font-size: 16px;
    }
    .user-right {
      display: flex;
      align-items: center;
    }
  }
}
::v-deep .el-badge__content.is-fixed {
  top: 16px;
}
</style>
