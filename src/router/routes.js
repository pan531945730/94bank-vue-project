import siftFinance from '@/views/Product/siftFinanceList.vue'
import steward from '@/views/Product/stewardList.vue'
import AccountCenter from '@/views/Member/AccountCenter.vue'
import ProductDetail from '@/views/Product/ProductDetail.vue'
import Login from '@/views/Member/Login.vue'

// 配置路由规则
const routes = [
  {
    path: '/',
    redirect: '/Product/siftFinance'
  },
  {
    path: '/Product/siftFinance',
    component: siftFinance,
    meta: {keepAlive: true}
  },
  {
    path: '/Product/steward',
    component: steward,
    meta: {keepAlive: true}
  },
  {
    path: '/Product/ProductDetail',
    component: ProductDetail
  },
  {
    path: '/Member/AccountCenter',
    component: AccountCenter
  },
  {
    path: '/Member/Login',
    component: Login
  }
]
export default routes
