<template>
  <div>
    <div class="toggleEmail">
      <div :class="{ left: true, active: flag }" @click="toggle">发送箱</div>
      <div :class="{ right: true, active: !flag }" @click="toggle">收件箱</div>
    </div>

    <!-- 发送邮箱 表单 -->
    <div class="addEmail" v-if="flag">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="发送地址" prop="name">
          <el-col :span="22"><el-input v-model="ruleForm.name"></el-input></el-col>
          <el-col :span="2" style="text-align: center"><el-button @click="toggleStatus">抄送人</el-button></el-col>
        </el-form-item>

        <el-form-item label="抄送人" v-if="status">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="发送标题">
          <el-col :span="22"><el-input v-model="ruleForm.name"></el-input></el-col>
        </el-form-item>

        <el-form-item label="发送内容">
          <el-row>
            <el-col :span="22">
              <textarea style="width: 100%; height: 200px" name="" id="" cols="30" rows="10"></textarea>
            </el-col>
          </el-row>
          <el-button type="info" size="medium">上传文件</el-button>
        </el-form-item>

        <el-form-item style="float: right">
          <el-col :span="24">
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100px">发送</el-button>
            <el-button @click="resetForm('ruleForm')" style="width: 100px">取消</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>

    <!-- 收件箱 -->
    <div class="acceptBox" v-else>
      <div class="accept-head">
        <div class="head-left">xxx邮件</div>
        <div class="head-right">标题:请假申请</div>
      </div>
      <div class="accept-cnt">
        <div class="cnt-left">
          <div class="left-item" v-for="item in 5" :key="item"></div>
        </div>
        <div class="cnt-right"></div>
      </div>
      <p class="remake"><el-button type="primary" style="width: 100px">取消</el-button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EfficientComm',

  data() {
    return {
      // 切换状态
      flag: false,
      // 发送箱
      ruleForm: {},
      rules: {},
      // 抄送人状态
      status: false
    }
  },

  mounted() {},

  methods: {
    // 切换状态
    toggle() {
      this.flag = !this.flag
    },
    // 切换抄送人
    toggleStatus() {
      this.status = !this.status
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.acceptBox {
  position: relative;
  width: 80%;
  margin: 40px auto;
  border: 1px solid #ccc;
  .remake {
    position: absolute;
    bottom: -90px;
    right: 90px;
  }
  .accept-cnt {
    width: 100%;
    .cnt-left {
      width: 300px;
      border-right: 1px solid #ccc;
      .left-item {
        width: 100%;
        border-bottom: 1px solid #ccc;
        height: 60px;
        line-height: 60px;
      }
    }
    .cnt-right {
      flex: 1;
    }
  }
  .accept-head {
    width: 100%;
    display: flex;
    height: 60px;
    line-height: 60px;
    .head-left {
      width: 300px;
      text-align: center;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .head-right {
      flex: 1;
      padding-left: 30px;
      border-bottom: 1px solid #ccc;
    }
  }
}
.addEmail {
  width: 80%;
  margin: 20px auto;
}
.active {
  color: #fff;
  background-color: #b49ad6;
}
.toggleEmail {
  font-size: 18px;
  display: flex;
  .left {
    width: 400px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .right {
    width: 400px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    text-align: center;
  }
}
</style>
