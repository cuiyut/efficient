<template>
  <div>
    <el-aside width="200px">
      <el-menu router class="el-menu-vertical-demo" text-color="white" unique-opened active-text-color="#333">
        <div class="logo">
          <img class="imgg" src="../assets/OA.png" alt="" />
          <soan>OA管理系统</soan>
        </div>
        <span v-for="item in list" :key="item.id">
          <!-- 一级路由	 -->
          <el-menu-item v-if="item.children.length == 0" :index="item.path">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>

          <!-- 一级路由	 -->
          <el-submenu :index="item.id.toString()" v-else>
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级路由 -->
            <el-menu-item-group v-for="items in item.children" :key="items.id">
              <el-menu-item :index="items.path"> {{ items.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </span>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'EfficientAside',

  data() {
    return {
      list: []
    }
  },

  mounted() {
    this.$axios.get('/effect/shou/menus').then((res) => {
      this.list = res.data.menuData
    })
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #81b4ef;
  color: rgb(254, 254, 254);
  text-align: center;
  line-height: 200px;
  height: 770px;
}
.el-menu {
  background-color: #81b4ef;
}
::v-deep .el-menu--inline {
  background-color: #81b4ef;
}
.logo {
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.imgg {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
i {
  color: white;
}
</style>
