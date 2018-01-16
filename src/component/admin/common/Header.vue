<template>
  <div>
    <span>你好,{{username}}</span>
    <el-dropdown>
      <el-button type="info">
        功能
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>预览网站</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="logout">注销登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-button--info {
  background-color: #b3c0d1;
  border-color: #b3c0d1;
  color: #48576a;
}
.el-button--info:focus,
.el-button--info:hover {
  background: #b3c0d1;
  border-color: #b3c0d1;
  color: #48576a;
}
</style>

<script>
export default {
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    logout() {
      this.$http.get(this.$api.logout)
      .then(res=>{
        if(res.data.status == 0){
          this.$alert(res.data.message);
          setTimeout(() => {
            this.$router.push({name:"login"});
          }, 2000);
        }else{
          this.$alert(res.data.message);
        }
      });
    }
  }
};
</script>