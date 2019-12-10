// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css'
import '../src/styles/app.css'
import '../src/styles/font.css'

// 使用axios请求方式
import axios from 'axios'
// 改为原型组件使用方式
Vue.prototype.$http = axios

// 使用vuex机制
import store from './store/store.js'
// 注册vuex中间件
Vue.prototype.$store = store

// 使用vue-scroller上拉刷新下拉加载
import VueScroller from 'vue-scroller'
// 注册vue-scroller中间件
Vue.use(VueScroller)

// 全局工具类引用
// rem基准值
import './utils/rem'

Vue.config.productionTip = false

// 开启google浏览器debug开发模式
Vue.config.devtools = true

// 注册vant中间件
Vue.use(Vant)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: require('../dist/error-img.png'),
  // loading: require('../dist/loading.png'),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
