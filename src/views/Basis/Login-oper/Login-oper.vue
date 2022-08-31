<template>
  <div>
    <!-- 搜索 -->
    <div class="form">
      <p>账号名称：<el-input placeholder="请输入姓名"></el-input></p>
      <span>
        时间：<el-time-picker
          v-model="value1"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点"
        >
        </el-time-picker>
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点"
        >
        </el-time-picker>
      </span>
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
      <el-table-column prop="ip" label="登录IP"> </el-table-column>
      <el-table-column prop="name" label="账号名称"> </el-table-column>
      <el-table-column prop="address" label="登录设备"> </el-table-column>
      <el-table-column prop="ip" label="登陆地点"> </el-table-column>
      <el-table-column prop="create_date" label="登录时间" width="250"> </el-table-column>】
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
  name: 'EfficientOper',

  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      tableData: [
        {
          id: 1,
          name: '登录',
          staff_id: 1,
          path: 'post /api/staff/login/',
          ip: '127.0.0.1',
          address: '本机地址  CZ88.NET',
          facility: 'ApiPOST Runtime +https://www.apipost.cn',
          create_date: '2022-08-29T16:24:32.261019'
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

  methods: {}
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
  span {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-time-picker {
      margin-right: 10px;
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
