// 引入请求插件以及路由配置文件
import axios from 'axios'
import api from '../js/api_config.js'

export default function (to, from, next) {
  var pageName = to.name;
  console.log(to);
  axios.get(api.islogin)
    .then(res => {
      let isLogin = false;
      if (res.data.code == "logined") {
        isLogin = true;
      }
      if (pageName == "login" && isLogin) {
        next({ name: "admin" });
      } else if (pageName != "login" && !isLogin) {
        next({ name: "login", query: { nextPage: to.fullPath } });
      } else {
        next();
      }
    });
}