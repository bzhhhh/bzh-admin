/**
 * 路由配置页
 */
import AsyncComponent from '@/utils/asyncComponent'
const CatList = AsyncComponent(() => import('@/pages/Cats/List.jsx'))
const CatDetail = AsyncComponent(() => import('@/pages/Cats/Detail.jsx'))

const routes = [
  {
    key: '/cats',
    title: '猫猫管理',
    exact: false,
    component: CatList,
    subs: [
      {
        key: '/cats/list',
        title: '猫猫列表',
        exact: true,
        component: CatList,
      },
      {
        key: '/cats/detail',
        title: '猫猫详情',
        comments: CatDetail,
      }
    ]
  },

]

export default routes
