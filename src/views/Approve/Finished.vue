<template>
  <div>
    <!-- 搜索 -->
    <div class="form">
      <p>审批类型：<el-input placeholder="请假"></el-input></p>
      <p>申请人：<el-input placeholder="请输入账号"></el-input></p>
      <p>审批状态：<el-input placeholder="请输入状态"></el-input></p>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <div class="sou">
        <el-button icon="el-icon-search">搜索</el-button>
        <el-button icon="el-icon-refresh-left">重置</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="审批人"> </el-table-column>
      <el-table-column prop="account" label="审批类型"> </el-table-column>
      <el-table-column prop="mobile" label="申请时间"> </el-table-column>
      <el-table-column prop="1" label="当前审批人"> </el-table-column>
      <el-table-column prop="position" label="审批状态"> </el-table-column>
      <el-table-column prop="department" label="所属部门"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="230">
        <template slot-scope="scope">
          <el-button @click="updat(scope.row)" type="primary" size="mini" icon="el-icon-chat-dot-round">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination class="fen" background layout="prev, pager, next" :total="total"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'EfficientBacklog',

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
