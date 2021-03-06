import Vue from 'vue'
import Router from 'vue-router'

//异步注入的页面
const index = r => require.ensure([], () => r(require('@/views/index/index.vue')), 'index')

Vue.use(Router)

//export全局路由对象，把需要单应用页面都配置在这
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index', //重定向第一个显示页面
      name: 'home',
      component: {},
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})
