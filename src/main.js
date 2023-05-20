import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'
//引入仓库
import store from './store';
//统一接口api文件夹里面全部请求函数
import * as API from '@/api'
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// ElementUI.Dialog.props.lockScroll.default = false;
Vue.use(ElementUI)
Vue.config.productionTip = false

// 注册全局组件
import  Nav from '@/components/nav'

Vue.component(Nav.name,Nav)
var bus = new Vue()
Vue.prototype.bus = bus

new Vue({
  render: h => h(App),
  beforeCreate(){
    // Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  //组件实例身上会多一个属性$store属性
  store,
}).$mount('#app')
