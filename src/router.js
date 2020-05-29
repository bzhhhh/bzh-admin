/**
 * 路由配置页
 */
import AsyncComponent from '@/utils/asyncComponent'
const Home = AsyncComponent(() => import('@/pages/Home/index'))
const Login = AsyncComponent(() => import('@/pages/Login/index'))

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    comments: Login
  }
]

export default routes


