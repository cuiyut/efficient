<template>
  <div>
    <!-- 搜索 -->
    <div class="form">
      <p>姓名：<el-input placeholder="请输入姓名"></el-input></p>
      <p>账号：<el-input placeholder="请输入部门"></el-input></p>
      <p>手机号：<el-input placeholder="请输入手机号"></el-input></p>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <div class="sou">
        <el-button icon="el-icon-search">搜索</el-button>
        <el-button icon="el-icon-refresh-left">重置</el-button>
        <el-button type="default" style="background-color: #a4adb3; color: #fff">下载工资条模板</el-button>
        <el-button type="default" icon="el-icon-search">上传</el-button>
      </div>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增工资条</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="用户名称"> </el-table-column>
      <el-table-column prop="account" label="出勤"> </el-table-column>
      <el-table-column prop="mobile" label="旷工"> </el-table-column>
      <el-table-column prop="1" label="请假"> </el-table-column>
      <el-table-column prop="position" label="基本工资"> </el-table-column>
      <el-table-column prop="department" label="岗位工资"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="updat(scope.row)" type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="fen"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="querys.pagenum"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="querys.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'EfficientSheet',

  data() {
    return {
      tableData: [],
      querys: {
        pagenum: 1,
        pagesize: 5
      },
      total: 0
    }
  },

  mounted() {},

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    .el-input {
      width: 70%;
    }
  }
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
}
.fen {
  float: right;
  margin-top: 10px;
}
</style>
