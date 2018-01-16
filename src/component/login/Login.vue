<template>
  <div class="login">
    <div class="title">
      <h3>知识分享系统</h3>
    </div>
    <el-form :label-position="labelPosition" :rules="rules" ref="user" label-width="80px" :model="user">
      <el-form-item label="用户名" prop="uname">
        <el-input v-model="user.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="upwd">
        <el-input v-model="user.upwd"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('user')">提交</el-button>
      <el-button @click="resetForm('user')">重置</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var checkPsw = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "top",
      user: {
        uname: null,
        upwd: null
      },
      rules: {
        uname: [{ validator: checkName, trigger: "blur" }],
        upwd: [{ validator: checkPsw, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$http.post(this.$api.login, this.user).then(res => {
        if (res.data.status == 0) {
          this.$alert("登录成功");
          setTimeout(() => {
            let nextPage = this.$route.query.nextPage;
            this.$router.push(nextPage ? nextPage : "/admin");
          }, 500);
        } else {
          this.$alert(res.data.message);
        }
      });
    },
    submitForm(formName) {
      // 通过ref引用得到form表单元素, 然后调用validate方法去校验全部字段,
      // 全部字段都通过校验, 那么回调收到的值为true, 否则为false
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$alert("校检失败，请检查您的输入格式");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login {
  width: 350px;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin: 0 auto;
  position: relative;
  top: 20%;
  padding: 10px;
}
.title {
  position: absolute;
  left: 50%;
  top: -60px;
  transform: translateX(-50%);
  color: #fff;
}
</style>