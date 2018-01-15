<template>
  <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-submenu v-for="(item,index) in menu" :key="item.title" :index="index">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="index-subindex" v-for="(subitem,subindex) in item.children" :key="subitem.title">
          <router-link :to="subitem.path">{{subitem.title}}</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo {
  width: 200px;
  min-height: 400px;
  background-color: #267cb7;
}
.el-aside{
  height: 100%;
  background-color: #267cb7;
}
.el-menu-item{
  background-color: #267cb7;  
}
.el-menu-item-group__title{
  padding: 0;
}
.el-submenu__title i{
  color: #fff;
}
.el-menu-item, .el-submenu__title {
    color: #fff;
    height: 56px;
    line-height: 56px;
    padding: 0 100px;
    position: relative;
    -webkit-box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
}
.el-submenu__title:hover{
  background-color: #20a0ff; 
}
.el-menu-item:focus, .el-menu-item:hover{
  background-color: #20a0ff;   
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "学员问题汇总",
          children: [
            {
              title: "内容管理",
              path: "/content"
            },
            {
              title: "类别管理",
              path: "/category"
            },
            {
              title: "评论管理",
              path: "/comment"
            }
          ]
        },
        {
          title: "前端常用功能",
          children: [
            {
              title: "内容管理",
              path: "/content"
            },
            {
              title: "类别管理",
              path: "/category"
            },
            {
              title: "评论管理",
              path: "/comment"
            }
          ]
        },
        {
          title: "重难点专区",
          children: [
            {
              title: "内容管理",
              path: "/content"
            },
            {
              title: "类别管理",
              path: "/category"
            },
            {
              title: "评论管理",
              path: "/comment"
            }
          ]
        },
        {
          title: "资源下载",
          children: [
            {
              title: "内容管理",
              path: "/content"
            },
            {
              title: "类别管理",
              path: "/category"
            },
            {
              title: "评论管理",
              path: "/comment"
            }
          ]
        },
        {
          title: "购物商城",
          children: [
            {
              title: "内容管理",
              path: "/content"
            },
            {
              title: "类别管理",
              path: "/category"
            },
            {
              title: "评论管理",
              path: "/comment"
            }
          ]
        },
        {
          title: "订单管理",
          children: [
            {
              title: "订单列表",
              path: "/indent"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {

    }
  }
};
</script>
  
<style scoped>
  a{
    text-decoration:none;
    color:#fff;
  }
  .el-submenu__title{
    color:#fff;
  }
</style>