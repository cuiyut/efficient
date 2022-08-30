<template>
  <div>
    <div class="header">
      <!-- 控制侧边栏隐藏显示 -->
      <div class="changeAside">
        <i :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse }" @click="toggleAside"></i>
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
        <p :class="{ 'el-icon-full-screen': !is_full, 'el-icon-rank': is_full }" @click="full"></p>
        <el-dropdown @command="handleCommand">
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

  data() {
    return {
      is_full: false
    }
  },

  mounted() {},

  methods: {}
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
