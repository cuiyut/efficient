<template>
  <div class="bg">
    <div class="oa">
      <p class="p">OA系统登录</p>
      <el-input
        class="inp"
        v-model="form.username"
        prefix-icon="el-icon-user-solid"
        placeholder="请输入用户名"
      ></el-input>
      <el-input
        class="inp"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="form.password"
        show-password
      ></el-input>
      <span class="wj" @click="wang">忘记密码？</span>
      <el-input class="inp1" placeholder="验证码" v-model="form.yzm" clearable> </el-input>
      <el-image class="imgs" src="./logo.png"></el-image>
      <el-button type="primary" class="deng" @click="deng()">登录</el-button>
    </div>
    <model ref="aa" />
  </div>
</template>

<script>
// import axios from 'axios'
import model from './ForgotPwd.vue'
export default {
  components: {
    model
  },
  name: 'EfficientLogin',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        username: '',
        password: '',
        yzm: ''
      },
      edit: {
        username1: '',
        newpwd: '',
        again: ''
      },
      formLabelWidth: '120px'
    }
  },

  mounted() {},

  methods: {
    wang(item) {
      this.$refs.aa.dialogFormVisible = item
    },
    deng() {
      this.$axios.post('/effect/user/login').then((res) => {
        console.log(res)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  box-sizing: border-box;
  padding-top: 150px;
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/1.png);
  background-size: cover;
}
.oa {
  width: 450px;
  height: 450px;
  margin: auto;
  background: white;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 20px 40px;
}
.p {
  font-size: 25px;
  font-weight: 750;
}
.inp {
  border-radius: 20px !important;
  margin-top: 40px;
}
.wj {
  font-size: 14px;
  color: orange;
  float: right;
  margin-top: 5px;
  cursor: pointer;
}
.imgs {
  width: 100px;
  height: 40px;
  float: right;
  margin-top: 16px;
  cursor: pointer;
}
.inp1 {
  width: 250px;
  float: left;
  margin-top: 40px;
}
.deng {
  width: 310px;
  height: 45px;
  margin-top: 40px;
  font-size: 20px;
  background: #efa4f4;
  border: none;
  border-radius: 10px;
}
</style>
