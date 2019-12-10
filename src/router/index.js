import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Index'],resolve)
  },
  {
    path: '/Login',
    name: 'Login',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Login'], resolve)
  },
  {
    path: '/Class',
    name: 'Class',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Class'], resolve)
  },
  {
    path: '/Cart',
    name: 'Cart',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Cart'], resolve)
  },
  {
    path: '/Mine',
    name: 'Mine',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Mine'], resolve)
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/OrderList'], resolve)
  },
  {
    path: '/OrderDetail',
    name: 'OrderDetail',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/OrderDetail'], resolve)
  },
  {
    path: '/EvaluList',
    name: 'EvaluList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/EvaluList'], resolve)
  },
  {
    path: '/Evalu',
    name: 'Evalu',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Evalu'], resolve)
  },
  {
    path: '/Address',
    name: 'Address',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Address'], resolve)
  },
  {
    path: '/AddressAdd',
    name: 'AddressAdd',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/AddressAdd'], resolve)
  },
  {
    path: '/Collection',
    name: 'Collection',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Collection'], resolve)
  },
  {
    path: '/Set',
    name: 'Set',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Set'], resolve)
  },
  {
    path: '/BindPhone',
    name: 'BindPhone',
    meta: { index: 3 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/BindPhone'], resolve)
  },
  {
    path: '/Search',
    name: 'Search',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Search'], resolve)
  },
  {
    path: '/SearchOrderList',
    name: 'SearchOrderList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/SearchOrderList'], resolve)
  },
  {
    path: '/GoodsDetail',
    name: 'GoodsDetail',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/GoodsDetail'], resolve)
  },
  {
    path: '/PayOrder',
    name: 'PayOrder',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/PayOrder'], resolve)
  },
  {
    path: '/Comment',
    name: 'Comment',
    meta: { index: 3 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/Comment'], resolve)
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ x: 0,y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
