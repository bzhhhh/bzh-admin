import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
// import { Route } from 'react-router-dom'

// 全局样式
import '@/assets/styles/App.css'
// 路由
import Routers from '@/router'

// function RenderRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <Routers />
      </ConfigProvider>
    )
  }
}

export default App
