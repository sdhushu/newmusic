import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/HomeView.vue'
import Welcome from '../views/pages/Welcome.vue'
import Paging from '../views/pages/Paging.vue'
import Shouji from '../views/pages/Shouji.vue'
import Shuzi from '../views/pages/Shuzi.vue'
import Wangye2 from '../views/pages/Wangye2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      meta: {
          title: '首页'
      },
      component: Home,
      redirect: '/welcome',
      children: [
          {
              name: 'welcome',
              path: '/welcome',
              meta: {
                  title: '第一个页面'
              },
              component: Welcome
          },
          {
            name: 'paging',
            path: '/paging',
            meta: {
                title: '分类页面'
            },
            component: Paging
        },
        {
          name: 'shouji',
          path: '/shouji',
          meta: {
              title: '手机配件页'
          },
          component: Shouji
      },
      {
        name: 'shuzi',
        path: '/shuzi',
        meta: {
            title: '数字专辑'
        },
        component: Shuzi
    },
    {
      name: 'wangye2',
      path: '/wangye2',
      meta: {
          title: '网页第二页面'
      },
      component: Wangye2
  },
      ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
        title: '登录'
    },
    component: () => import('@/views/Login.vue')
},
// {
//   name: 'rego',
//   path: '/rego',
//   meta: {
//       title: '注册'
//   },
//   component: () => import('@/views/Rego.vue')
// },
// {
//     name: '404',
//     path: '/404',
//     meta: {
//         title: '页面不存在'
//     },
//     component: () => import('@/views/404.vue')
// }
    
  ]
})