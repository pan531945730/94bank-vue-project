// 配置路由规则
const routes = [
  {
    path: '*',
    redirect: '/Product/siftFinance'
  },
  {
    path: '/Product/siftFinance',
    component: function (resolve) {
      require(['../views/Product/siftFinanceList.vue'], resolve)
    },
    meta: {keepAlive: true}
  },
  {
    path: '/Product/steward',
    component: function (resolve) {
      require(['../views/Product/stewardList.vue'], resolve)
    },
    meta: {keepAlive: true}
  },
  {
    path: '/Product/ProductDetail',
    component: function (resolve) {
      require(['../views/Product/ProductDetail.vue'], resolve)
    }
  },
  {
    path: '/Member/AccountCenter',
    component: function (resolve) {
      require(['../views/Member/AccountCenter.vue'], resolve)
    }
  },
  {
    path: '/Member/Login',
    component: function (resolve) {
      require(['../views/Member/Login.vue'], resolve)
    }
  }
]
export default routes
