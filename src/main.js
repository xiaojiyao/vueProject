// 引入vue包
import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'

// 引入默认全局样式包
import 'normalize.css'

// 引入自己写的首页less样式
import '../src/less/index.less'

// 引入axios插件
import axios from 'axios'

// 引入自己写的根组件
import App from './component/App.vue'
import routerConfig from './router/index.js'

// 引入api路径配置
import api from '../src/js/api_config.js'

// 引入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'

// 使用基于vue的插件
Vue.use(Router);
Vue.use(ElementUi);

// 配置axios请求时请求的默认域名
axios.defaults.baseURL = 'http://localhost:8899';

// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;

// 因为axios属于第三方插件，不属于vue的内置插件，所以把它添加到vue原型上，方便调用
Vue.prototype.$http = axios;

// api也不属于vue的内置插件，所以添加到vue原型上
Vue.prototype.$api = api;

// 定义路由实例
let vueRouter  = new Router(routerConfig);
// 引入路由守卫文件，，并将路由守卫挂到实例上
import beforeEach from '../src/router/beforeEach.js';
vueRouter.beforeEach(beforeEach);


new Vue({
  el: "#app",
  router: vueRouter,
  render: e => e(App)
});