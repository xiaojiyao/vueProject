// 引入Login组件
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import GoodsCgAdd from '../component/admin/goods/category/goodsCgAdd.vue'
import GoodsCgList from '../component/admin/goods/category/goodsCgList.vue'
import GoodsCgEdit from '../component/admin/goods/category/goodsCgEdit.vue'
import GoodsCtAdd from '../component/admin/goods/content/goodsCtAdd.vue'
import GoodsCtList from '../component/admin/goods/content/goodsCtList.vue'
import GoodsCtEdit from '../component/admin/goods/content/goodsCtEdit.vue'

// 定义admin子路由数组
let adminGoods = [
  {
    name: "goodsCgAdd", path: "goods/goodsCg/add", component: GoodsCgAdd
  }, {
    name: "goodsCgList", path: "goods/goodsCg/list", component: GoodsCgList
  }, {
    name: "goodsCgEdit", path: "goods/goodsCg/edit/:id", component: GoodsCgEdit
  },
  {
    name: "goodsCtAdd", path: "goods/goodsCt/add", component: GoodsCtAdd
  }, {
    name: "goodsCtList", path: "goods/goodsCt/list", component: GoodsCtList
  }, {
    name: "goodsCtEdit", path: "goods/goodsCt/edit/:id", component: GoodsCtEdit
  },
];

// 暴露路由配置对象
export default {
  routes: [
    { name: "index", path: "/" ,redirect: "/admin"},
    { name: "login", path: "/login", component: Login },
    { name: "admin", path: "/admin", component: Admin, children: adminGoods },
  ]
}