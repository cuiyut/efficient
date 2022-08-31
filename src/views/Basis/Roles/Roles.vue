<template>
  <div>
    <!-- 搜索 -->
    <div class="form">
      <p>角色名称：<el-input placeholder="请输入姓名"></el-input></p>

      <el-button icon="el-icon-search">搜索</el-button>
      <el-button icon="el-icon-refresh-left">重置</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增角色</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 100%; margin-top: 25px">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="角色名称"> </el-table-column>
      <el-table-column prop="desc" label="备注"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="primary" size="mini" icon="el-icon-edit">修改</el-button>
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
  name: 'EfficientRoles',

  data() {
    return {
      tableData: [
        {
          id: 1,
          name: '普通员工',
          desc: 144444444,
          create_date: '2022-08-23T12:00:00'
        }
      ],
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
  justify-content: flex-start;
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
.fen {
  float: right;
  margin-top: 10px;
}
</style>
