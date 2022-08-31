<template>
  <div>
    <!-- 搜索 -->
    <div class="form">
      <p>部门名称：<el-input placeholder="请输入姓名"></el-input></p>

      <el-button icon="el-icon-search">搜索</el-button>
      <el-button icon="el-icon-refresh-left">重置</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增菜单</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 20px"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" type="primary" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete"
            >删除</el-button
          >
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
  name: 'EfficientDivisional',

  data() {
    return {
      tableData: [
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
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
