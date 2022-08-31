<template>
  <div>
    <!-- 添加 -->
    <div class="add">
      <el-button type="primary" icon="el-icon-plus">添加类型</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 100%; margin-top: 25px">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="流程名称"> </el-table-column>
      <el-table-column prop="desc" label="最后修改人"> </el-table-column>
      <el-table-column prop="desc" label="最后修改时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination class="fen" background layout="prev, pager, next" :total="total"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'EfficientApproval',

  data() {
    return {
      tableData: [],
      total: 0
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  align-items: center;
}
.fen {
  float: right;
  margin-top: 10px;
}
</style>
