import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
// import { Route } from 'react-router-dom'

// 全局样式
import '@/assets/styles/App.css'
// 路由
import AsyncComponent from '@/utils/asyncComponent'
const Home = AsyncComponent(() => import('@/pages/Home/index.jsx'))
const Login = AsyncComponent(() => import('@/pages/Login/index.jsx'))
const Error = AsyncComponent(() => import('@/pages/Error/404.jsx'))

class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            {/* <Route path='/500' component={View500} /> */}
            <Route path='/home' component={Home} />
            <Route path='/404' component={Error} />
          </Switch>
        </Router>
      </ConfigProvider>
    )
  }
}

export default App
