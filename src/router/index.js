// 引入Login组件
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'

// 暴露路由配置对象
export default {
  routes: [
    { name: "login", path: "/login", component: Login },
    { name: "admin", path: "/admin", component: Admin },
  ]
}